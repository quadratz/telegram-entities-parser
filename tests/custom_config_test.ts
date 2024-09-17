import type {
  CommonEntity,
  RendererOutput,
  TextSanitizer,
  TextSanitizerOption,
} from "../types.ts";
import { EntitiesParser, RendererHtml } from "../mod.ts";
import { assertStrictEquals } from "jsr:@std/assert@1.0.5";
import { message } from "./fixtures/custom_config_message.ts";

Deno.test("Should use custom renderer", () => {
  class MyRenderer extends RendererHtml {
    bold(
      _option: { text: string; entity: CommonEntity },
    ): RendererOutput {
      return {
        prefix: `<strong class="tg-bold">`,
        suffix: "</strong>",
      };
    }
  }

  const entitiesParser = new EntitiesParser({ renderer: new MyRenderer() });
  const html = entitiesParser.parse({ message });

  assertStrictEquals(
    html,
    '<strong class="tg-bold">bold&amp;</strong>&lt;<i class="tg-italic">&gt;italic</i>',
  );
});

Deno.test("Should use custom sanitizer", async (t) => {
  await t.step("Should sanitize the text", () => {
    {
      const myTextSanitizer: TextSanitizer = (
        options: TextSanitizerOption,
      ): string =>
        options.text.replace(/[&<>]/g, (match) => {
          switch (match) {
            case "&":
              return "&amp;&amp;";
            case "<":
              return "&lt;&lt;";
            case ">":
              return "&gt;&gt;";
            default:
              return match;
          }
        });

      const entitiesParser = new EntitiesParser({
        textSanitizer: myTextSanitizer,
      });
      const html = entitiesParser.parse({ message });

      assertStrictEquals(
        html,
        '<b class="tg-bold">bold&amp;&amp;</b>&lt;&lt;<i class="tg-italic">&gt;&gt;italic</i>',
      );
    }
  });
  await t.step("Should not sanitize the text", () => {
    const entitiesParser = new EntitiesParser({
      textSanitizer: false,
    });
    const html = entitiesParser.parse({ message });

    assertStrictEquals(
      html,
      '<b class="tg-bold">bold&</b><<i class="tg-italic">>italic</i>',
    );
  });
});
