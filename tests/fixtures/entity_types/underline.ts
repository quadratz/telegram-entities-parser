import type { Fixture } from "../../utils/types.ts";

export const underline: Fixture = {
  message: {
    "text": "This is underline underlined text",
    "entities": [
      {
        "offset": 18,
        "length": 15,
        "type": "underline",
      },
    ],
  },
  expected: {
    html: 'This is underline <span class="tg-underline">underlined text</span>',
  },
};
