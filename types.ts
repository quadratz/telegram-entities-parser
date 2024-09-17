/**
 * Type definitions for the [telegram-entities-parser](https://jsr.io/qz/telegram-entities-parser) package.
 *
 * For more details and examples, visit https://github.com/quadratz/telegram-entities-parser.
 * @module
 */
export type { Renderer, RendererOutput } from "./src/renderers/renderer.ts";
export type { TextSanitizer } from "./src/utils/escapeHtml.ts";
export type { Message } from "./src/types/message.ts";
export type {
  CommonEntity,
  CustomEmojiEntity,
  EntityType,
  MessageEntity,
  PreEntity,
  TextLinkEntity,
  TextMentionEntity,
} from "./src/types/message_entity.ts";
