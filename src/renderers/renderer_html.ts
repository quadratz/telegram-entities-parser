// deno-lint-ignore-file no-unused-vars -- expected, for template purposes.
import type {
  CommonEntity,
  CustomEmojiEntity,
  PreEntity,
  TextLinkEntity,
  TextMentionEntity,
} from "../types/message_entity.ts";
import type { RendererOutput } from "../renderers/renderer.ts";
import type { Renderer } from "./renderer.ts";

/**
 * HTML Renderer.
 *
 * This renderer converts entities into semantic HTML, adhering closely to best practices and standards.
 * It can be fully overridden or extended to customize the output.
 *
 * Quick Example: Overriding the Bold Type Output.
 *
 * ```ts
 * class MyRenderer extends RendererHtml {
 *   bold(option: { text: string, entity: CommonEntity }): RendererOutput {
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
 * For more examples, visit: <https://github.com/quadratz/telegram-entity-parser>.
 */
export class RendererHtml implements Renderer {
  blockquote(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<blockquote class="tg-blockquote">`,
      suffix: "</blockquote>",
    };
  }

  bold(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<b class="tg-bold">`,
      suffix: "</b>",
    };
  }

  botCommand(option: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<span class="tg-bot-command">`,
      suffix: "</span>",
    };
  }

  cashtag(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-cashtag">`,
      suffix: "</span>",
    };
  }

  code(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<code class="tg-code">`,
      suffix: "</code>",
    };
  }

  customEmoji(
    option: { text: string; entity: CustomEmojiEntity },
  ): RendererOutput {
    const emojiId = option.entity.custom_emoji_id ?? "";
    return {
      prefix:
        `<span class="tg-custom-emoji" data-custom-emoji-id="${emojiId}">`,
      suffix: "</span>",
    };
  }

  email(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-email" href="mailto:${option.text}">`,
      suffix: "</a>",
    };
  }

  expandableBlockquote(option: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<blockquote class="tg-expandable-blockquote">`,
      suffix: "</blockquote>",
    };
  }

  hashtag(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-hashtag">`,
      suffix: "</span>",
    };
  }

  italic(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<i class="tg-italic">`,
      suffix: "</i>",
    };
  }

  mention(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    /**
     * Remove the leadding `@` symbol from the text.
     *
     * Mention always start with `@`.
     * Examples: `@telegram`, `@durov`, `@grammyjs`
     */
    const username = option.text.slice(1);
    return {
      prefix: `<a class="tg-mention" href="https://t.me/${username}">`,
      suffix: "</a>",
    };
  }

  phoneNumber(option: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<a class="tg-phone-number" href="tel:${option.text}">`,
      suffix: "</a>",
    };
  }

  pre(option: { text: string; entity: PreEntity }): RendererOutput {
    if ("language" in option.entity) {
      return {
        prefix:
          `<pre class="tg-pre-code"><code class="language-${option.entity.language}">`,
        suffix: "</code></pre>",
      };
    }
    return {
      prefix: `<pre class="tg-pre">`,
      suffix: "</pre>",
    };
  }

  spoiler(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-spoiler">`,
      suffix: "</span>",
    };
  }

  strikethrough(option: {
    text: string;
    entity: CommonEntity;
  }): RendererOutput {
    return {
      prefix: `<del class="tg-strikethrough">`,
      suffix: "</del>",
    };
  }

  textLink(
    option: { text: string; entity: TextLinkEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-text-link" href="${option.entity.url}">`,
      suffix: `</a>`,
    };
  }

  textMention(option: {
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
    const href = (option.entity.user.username)
      ? `https://t.me/${option.entity.user.username}`
      : `tg://user?id=${option.entity.user.id}`;

    return {
      prefix: `<a class="tg-text-mention" href="${href}">`,
      suffix: "</a>",
    };
  }

  underline(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<span class="tg-underline">`,
      suffix: "</span>",
    };
  }

  url(
    option: { text: string; entity: CommonEntity },
  ): RendererOutput {
    return {
      prefix: `<a class="tg-url" href="${option.text}">`,
      suffix: "</a>",
    };
  }
}
