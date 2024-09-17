import type { Renderer } from "../renderers/renderer.ts";
import type { MessageEntity } from "../types/message_entity.ts";
import type { TextSanitizer } from "./sanitizer_html.ts";
import { renderEntity } from "./render_entity.ts";

/**
 * Processes a single message entity and its surrounding text, applying the specified renderer to format the entity.
 *
 * This function handles both regular and nested entities:
 * - For regular entities, it applies the renderer to the entity text and sanitizes it.
 * - For nested entities (where the next entity starts at the same offset as the current one), it recursively processes the next entity and combines the results.
 */
export function processEntity(
  options: ProcessEntityOption,
): ProcessEntityOutput {
  const { entities, index, renderer, text, textSanitizer } = options;
  const entity = entities[index];
  const nextEntity = entities[index + 1];

  // Extract the text segment that the entity is pointing to.
  const entityText = text.slice(
    entity.offset,
    entity.offset + entity.length,
  );

  // Apply the renderer.
  const { prefix, suffix } = renderEntity({
    renderer,
    entity,
    text: entityText,
  });

  // Check if the next entity starts at the same position as the current one (nested entity).
  if (entity.offset === nextEntity?.offset) {
    // Recursively process the next entity.
    const { text: htmlText, index: lastIndex, endOfEntity } = processEntity({
      ...options,
      index: index + 1,
    });

    const remainingText = text.slice(
      endOfEntity,
      entity.offset + entity.length,
    );

    const escapedText = textSanitizer({ text: remainingText });

    return {
      index: lastIndex,
      text: `${prefix}${htmlText}${escapedText}${suffix}`,
      endOfEntity: entity.offset + entity.length,
    };
  } else {
    const escapedText = textSanitizer({ text: entityText });

    return {
      index,
      text: `${prefix}${escapedText}${suffix}`,
      endOfEntity: entity.offset + entity.length,
    };
  }
}

interface ProcessEntityOption {
  entities: MessageEntity[];
  renderer: Renderer;
  textSanitizer: TextSanitizer;
  /**
   * The index of the current entity in the array of entities.
   */
  index: number;
  /**
   * The full text of the message.
   */
  text: string;
}

interface ProcessEntityOutput {
  /**
   * The formatted text including the processed entity.
   */
  text: string;

  /**
   * The updated index in the array of entities after processing the current entity.
   * This can be used to continue processing subsequent entities.
   */
  index: number;

  /**
   * The position in the text where the current entity ends.
   * This indicates the end of the processed entity's text segment.
   */
  endOfEntity: number;
}
