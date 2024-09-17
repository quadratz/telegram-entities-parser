import type { Renderer, RendererOutput } from "../renderers/renderer.ts";
import type { MessageEntity } from "../types/message_entity.ts";

export function renderEntity(options: {
  renderer: Renderer;
  text: string;
  entity: MessageEntity;
}): RendererOutput {
  const { renderer, text, entity } = options;
  switch (entity.type) {
    case "blockquote":
      return renderer.blockquote({ text, entity });
    case "bold":
      return renderer.bold({ text, entity });
    case "bot_command":
      return renderer.botCommand({ text, entity });
    case "cashtag":
      return renderer.cashtag({ text, entity });
    case "code":
      return renderer.code({ text, entity });
    case "custom_emoji":
      return renderer.customEmoji({ text, entity });
    case "email":
      return renderer.email({ text, entity });
    case "expandable_blockquote":
      return renderer.expandableBlockquote({ text, entity });
    case "hashtag":
      return renderer.hashtag({ text, entity });
    case "italic":
      return renderer.italic({ text, entity });
    case "mention":
      return renderer.mention({ text, entity });
    case "phone_number":
      return renderer.phoneNumber({ text, entity });
    case "pre":
      return renderer.pre({ text, entity });
    case "spoiler":
      return renderer.spoiler({ text, entity });
    case "strikethrough":
      return renderer.strikethrough({ text, entity });
    case "text_link":
      return renderer.textLink({ text, entity });
    case "text_mention":
      return renderer.textMention({ text, entity });
    case "underline":
      return renderer.underline({ text, entity });
    case "url":
      return renderer.url({ text, entity });
    default:
      return { prefix: "", suffix: "" };
  }
}
