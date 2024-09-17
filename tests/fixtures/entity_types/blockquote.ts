import type { Fixture } from "../../utils/types.ts";

export const blockquote: Fixture = {
  message: {
    "text":
      "This is blockquote\nWhen a clown moves into a palace, he doesn't become a king. The palace becomes a circus.\n— Turkish Proverb",
    "entities": [
      {
        "offset": 19,
        "length": 106,
        "type": "blockquote",
      },
    ],
  },
  expected: {
    html:
      `This is blockquote\n<blockquote class="tg-blockquote">When a clown moves into a palace, he doesn&#x27;t become a king. The palace becomes a circus.\n— Turkish Proverb</blockquote>`,
  },
};
