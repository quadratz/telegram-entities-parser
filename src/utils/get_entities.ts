import type { Message, TextWithEntity } from "../types/message.ts";
import type { MessageEntity } from "../types/message_entity.ts";

/**
 * Extracts the text and its entities from the message.
 *
 * If no text is found within the message, an error is thrown.
 */
export function getEntities(msg: Message): TextWithEntity {
  // Extract `text` from the message, falling back to `caption` if text is not present.
  const text: string | undefined = msg.text ?? msg.caption;

  // Throw an error if neither text nor caption is found.
  if (!text) {
    throw new Error(
      "No text to extract. Please check if the message contains any text.",
    );
  }

  // Extract `entities` from the message, falling back to `caption_entities` if `entities` are not present.
  const entities: MessageEntity[] = msg.entities ?? msg.caption_entities ?? [];

  return { text, entities };
}
