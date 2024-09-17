// deno-lint-ignore-file no-unused-vars -- expected, for template purposes.
import type {
  CommonEntity,
  CustomEmojiEntity,
  PreEntity,
  TextLinkEntity,
  TextMentionEntity,
} from "../types/message_entity.ts";

import type { RendererHtml } from "./renderer_html.ts";

/**
 * Base class for rendering message entities into specific formats.
 *
 * This class serves as a base for implementing rendering logic for different formats, such as HTML.
 * To customize rendering behavior, extend this class and override its methods.
 * For a concrete implementation, see {@link RendererHtml}.
 * For complete examples, visit: <https://github.com/quadratz/telegram-entities-parser>.
 */
export class Renderer {
  blockquote(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  bold(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  botCommand(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  cashtag(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  code(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  customEmoji(
    option: { text: string; entity: CustomEmojiEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  email(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  expandableBlockquote(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  hashtag(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  italic(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  mention(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  phoneNumber(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  pre(option: { text: string; entity: PreEntity }): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  spoiler(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  strikethrough(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  textLink(
    option: { text: string; entity: TextLinkEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  textMention(
    option: { text: string; entity: TextMentionEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  underline(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  url(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }
}

const BLANK_PREFIX_SUFFIX = {
  prefix: "",
  suffix: "",
};

/**
 * Represents the output of {@linkcode Renderer}.
 *
 * @example Usage
 * ```ts
 * {
 *   prefix: '<a href="https://www.example.com"',
 *   suffix: '</a>'
 * }
 * ```
 */
export interface RendererOutput {
  prefix: string;
  suffix: string;
}
