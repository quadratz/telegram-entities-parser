// deno-lint-ignore-file no-unused-vars -- expected, for template purposes.
import type { RendererHtml } from "./renderer_html.ts";
import type {
  CommonEntity,
  CustomEmojiEntity,
  PreEntity,
  TextLinkEntity,
  TextMentionEntity,
} from "../../types.ts";

/**
 * Base class for rendering message entities into specific formats.
 *
 * This class serves as a base for implementing rendering logic for different formats, such as HTML.
 * To customize rendering behavior, extend this class and override its methods.
 * For a concrete implementation, see {@linkcode RendererHtml}.
 * For complete examples, visit: <https://github.com/quadratz/telegram-entities-parser>.
 */
export class Renderer {
  blockquote(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  bold(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  botCommand(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  cashtag(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  code(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  customEmoji(
    options: { text: string; entity: CustomEmojiEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  email(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  expandableBlockquote(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  hashtag(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  italic(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  mention(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  phoneNumber(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  pre(options: { text: string; entity: PreEntity }): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  spoiler(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  strikethrough(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  textLink(
    options: { text: string; entity: TextLinkEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  textMention(
    options: { text: string; entity: TextMentionEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  underline(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return BLANK_PREFIX_SUFFIX;
  }

  url(
    options: { text: string; entity: CommonEntity },
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
