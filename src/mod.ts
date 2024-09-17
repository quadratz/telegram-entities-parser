import type { Message } from "./types/message.ts";
import { getEntities } from "./utils/getEntities.ts";
import type { Renderer } from "./renderers/renderer.ts";
import { RendererHtml } from "./renderers/renderer_html.ts";
import { escapeHtml, type TextSanitizer } from "./utils/escapeHtml.ts";
import { processEntity } from "./utils/processEntity.ts";

/**
 * Parses Telegram entities and formats them using the specified renderer.
 *
 * You can customize how entities are wrapped with HTML tags by providing a custom renderer or extending the default one. The renderer affects only the HTML tags around the entities, not the text itself.
 *
 * For more details and examples, visit <https://github.com/quadratz/telegram-entity-parser>.
 *
 * @example Usage
 * ```ts
 * // For better performance, create the instance outside the function.
 * const entitiesParser = new EntitiesParser();
 * const parse = (msg: Message) => entitiesParser.parse(msg);
 *
 * bot.on(":text", (ctx) => {
 *   const html = parse(ctx.msg);
 * });
 * ```
 * @param {EntitiesParserOption} options
 * Configuration options for parsing entities.
 *
 * @param {EntitiesParserOption["renderer"]} [options.renderer]
 * Custom renderer for HTML tags surrounding the entities. Defaults to {@linkcode RendererHtml}.
 *
 * @param {EntitiesParserOption["textSanitizer"]} [options.textSanitizer]
 * Function or flag to sanitize text before rendering.
 *
 * Pass `false` to skip sanitization (not recommended, as it may break HTML rendering and expose you to XSS attacks).
 * Defaults to {@linkcode escapeHtml}.
 */
export class EntitiesParser {
  private _renderer: Renderer;
  private _textSanitizer: TextSanitizer;

  constructor(options?: EntitiesParserOption) {
    this._renderer = options?.renderer ?? new RendererHtml();

    if (options?.textSanitizer) {
      this._textSanitizer = options.textSanitizer;
    } else if (options?.textSanitizer === false) {
      this._textSanitizer = (text) => text;
    } else {
      this._textSanitizer = escapeHtml;
    }
  }

  /**
   * Parses the entities in the provided message.
   *
   * @param {ParseOption} options
   * An object containing the message and optional data for the renderer.
   *
   * @param {ParseOption["message"]} [options.message]
   * [Telegram message](https://core.telegram.org/bots/api#message).
   * Only the following properties are relevant: `text`, `entities`, `caption`, and `caption_entities`. Other properties are ignored.
   *
   * @returns {string}
   * The resulting formatted string.
   */
  public parse(options: ParseOption): string {
    const { message } = options;
    const { text, entities } = getEntities(message);

    // Return the sanitized text immediately if there are no entities.
    if (entities.length === 0) return this._textSanitizer(text);

    let result: string = "";
    // Tracks the end of the last processed text segment.
    let lastProcessedOffset = 0;

    for (let index = 0; index < entities.length; index++) {
      const entity = entities[index];

      // Extract the text segment between entities.
      const regularText = text.slice(lastProcessedOffset, entity.offset);

      // Append the sanitized text segment.
      result += this._textSanitizer(regularText);

      // Process the current entity and get its formatted HTML text.
      const { index: newIndex, text: htmlText, endOfEntity } = processEntity({
        index,
        entities,
        text,
        renderer: this._renderer,
        textSanitizer: this._textSanitizer,
      });

      // Append the HTML text for the current entity.
      result += htmlText;

      // Update the position of the last processed text segment.
      lastProcessedOffset = endOfEntity;

      // Update index for the next iteration
      index = newIndex;
    }

    // Append any remaining text after the last entity.
    result += text.slice(lastProcessedOffset);

    return result;
  }
}

/**
 * Options for configuring the {@linkcode EntitiesParser}.
 */
export interface EntitiesParserOption {
  /**
   * Custom renderer for HTML tags around entities.
   *
   * This renderer is used to define how different types of entities are wrapped with HTML tags in the output.
   * This does not modify the text itself, only the tags surrounding it.
   * If not specified, a default {@linkcode RendererHtml} will be used.
   */
  renderer?: Renderer;

  /**
   * Function or flag to sanitize text before rendering.
   *
   * - `false`: No text sanitization is applied.
   * - A {@linkcode TextSanitizer} function: Custom text sanitizer function used to clean or modify the text content.
   *
   * If a function is provided, it will be used to sanitize the text before rendering.
   * If not specified, the default sanitizer {@linkcode escapeHtml} will be used.
   */
  textSanitizer?: false | TextSanitizer;
}

/**
 * Represent option for {@linkcode EntitiesParser.parse} method.
 */
export interface ParseOption {
  /**
   * [Telegram message](https://core.telegram.org/bots/api#message) object.
   *
   * Only the following properties are relevant: `text`, `entities`, `caption`, and `caption_entities`. Other properties are ignored.
   */
  message: Message;
}
