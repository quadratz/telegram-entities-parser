import type { Fixture } from "../../utils/types.ts";

export const bold: Fixture = {
  message: {
    "text": "This is bold bold text",
    "entities": [
      {
        "offset": 13,
        "length": 9,
        "type": "bold",
      },
    ],
  },
  expected: {
    html: 'This is bold <b class="tg-bold">bold text</b>',
  },
};
