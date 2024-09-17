import type { Fixture } from "../../utils/types.ts";

export const italic: Fixture = {
  message: {
    "text": "This is italic italic text",
    "entities": [
      {
        "offset": 15,
        "length": 11,
        "type": "italic",
      },
    ],
  },
  expected: {
    html: 'This is italic <i class="tg-italic">italic text</i>',
  },
};
