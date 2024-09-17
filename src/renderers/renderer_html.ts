// deno-lint-ignore-file no-unused-vars -- expected, for template purposes.
import type {
  CommonEntity,
  CustomEmojiEntity,
  PreEntity,
  Renderer,
  RendererOutput,
  TextLinkEntity,
  TextMentionEntity,
} from "../../types.ts";

/**
 * Renders to HTML.
 *
 * This renderer converts entities into semantic HTML, adhering closely to best practices and standards.
 * It can be fully overridden or extended to customize the output.
 *
 * @example Overriding the Bold Type Output.
 * ```ts
 * class MyRenderer extends RendererHtml {
 *   bold(options: { text: string, entity: CommonEntity }): RendererOutput {
 *     return {
 *       prefix: `<strong class="tg-bold">`,
 *       suffix: "</strong>",
 *     };
 *   }
 * }
 *
 * const renderer = new MyRenderer();
 * const entitiesParser = new EntitiesParser({ renderer });
 * ```
 *
 * In this example, we extend the `RendererHtml` class to customize the rendering of bold entities by defining a `bold` method that returns the appropriate HTML tags for bold formatting.
 *
 * For more examples, visit: <https://github.com/quadratz/telegram-entities-parser>.
 */
export class RendererHtml implements Renderer {
  blockquote(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<blockquote class="tg-blockquote">`,
      suffix: "</blockquote>",
    };
  }

  bold(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<b class="tg-bold">`,
      suffix: "</b>",
    };
  }

  botCommand(options: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<span class="tg-bot-command">`,
      suffix: "</span>",
    };
  }

  cashtag(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-cashtag">`,
      suffix: "</span>",
    };
  }

  code(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<code class="tg-code">`,
      suffix: "</code>",
    };
  }

  customEmoji(
    options: { text: string; entity: CustomEmojiEntity },
  ): RendererOutput {
    const emojiId = options.entity.custom_emoji_id ?? "";
    return {
      prefix:
        `<span class="tg-custom-emoji" data-custom-emoji-id="${emojiId}">`,
      suffix: "</span>",
    };
  }

  email(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-email" href="mailto:${options.text}">`,
      suffix: "</a>",
    };
  }

  expandableBlockquote(options: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<blockquote class="tg-expandable-blockquote">`,
      suffix: "</blockquote>",
    };
  }

  hashtag(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-hashtag">`,
      suffix: "</span>",
    };
  }

  italic(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<i class="tg-italic">`,
      suffix: "</i>",
    };
  }

  mention(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    /**
     * Remove the leadding `@` symbol from the text.
     *
     * Mention always start with `@`.
     * Examples: `@telegram`, `@durov`, `@grammyjs`
     */
    const username = options.text.slice(1);
    return {
      prefix: `<a class="tg-mention" href="https://t.me/${username}">`,
      suffix: "</a>",
    };
  }

  phoneNumber(options: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<a class="tg-phone-number" href="tel:${options.text}">`,
      suffix: "</a>",
    };
  }

  pre(options: { text: string; entity: PreEntity }): RendererOutput {
    if ("language" in options.entity) {
      return {
        prefix:
          `<pre class="tg-pre-code"><code class="language-${options.entity.language}">`,
        suffix: "</code></pre>",
      };
    }
    return {
      prefix: `<pre class="tg-pre">`,
      suffix: "</pre>",
    };
  }

  spoiler(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-spoiler">`,
      suffix: "</span>",
    };
  }

  strikethrough(options: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<del class="tg-strikethrough">`,
      suffix: "</del>",
    };
  }

  textLink(
    options: { text: string; entity: TextLinkEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-text-link" href="${options.entity.url}">`,
      suffix: `</a>`,
    };
  }

  textMention(options: {
    text: string;
    entity: TextMentionEntity;
  }): RendererOutput {
    /**
     * According to Telegram's API documentation, text_mention is used for
     * users without a username.
     * However, we'll check for a username to be safe.
     *
     * @see https://core.telegram.org/bots/api#messageentity
     */
    const href = (options.entity.user.username)
      ? `https://t.me/${options.entity.user.username}`
      : `tg://user?id=${options.entity.user.id}`;

    return {
      prefix: `<a class="tg-text-mention" href="${href}">`,
      suffix: "</a>",
    };
  }

  underline(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-underline">`,
      suffix: "</span>",
    };
  }

  url(
    options: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-url" href="${options.text}">`,
      suffix: "</a>",
    };
  }
}
