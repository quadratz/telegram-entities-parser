import type { Fixture } from "../../utils/types.ts";

export const text_link: Fixture = {
  message: {
    "text": "This is text_link grammy",
    "entities": [
      {
        "offset": 18,
        "length": 6,
        "type": "text_link",
        "url": "https://grammy.dev/",
      },
    ],
  },
  expected: {
    html:
      'This is text_link <a class="tg-text-link" href="https://grammy.dev/">grammy</a>',
  },
};
