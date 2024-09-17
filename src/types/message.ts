import type { MessageEntity } from "./message_entity.ts";

/**
 * This object represents **partial** [Telegram message](https://core.telegram.org/bots/api#message).
 *
 * Only the following properties are relevant: `text`, `entities`, `caption`, and `caption_entities`.
 * Other properties are ignored.
 */
export interface Message {
  /** The actual UTF-8 text of the message (for text messages) */
  text?: string;
  /** Special entities like usernames, URLs, bot commands, etc. in the text (for text messages) */
  entities?: Array<MessageEntity>;
  /** Caption for media such as animation, audio, document, photo, video, or voice */
  caption?: string;
  /** Special entities like usernames, URLs, bot commands, etc. in the caption (for messages with a caption) */
  caption_entities?: Array<MessageEntity>;
  // Allows for additional properties not explicitly defined.
  [key: string]: any;
}

/**
 * Represents a message with extracted text and entities.
 */
export interface TextWithEntity
  extends Required<Pick<Message, "text" | "entities">> {}
