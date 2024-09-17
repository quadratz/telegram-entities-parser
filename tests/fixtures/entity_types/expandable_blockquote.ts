import type { Fixture } from "../../utils/types.ts";

export const expandable_blockquote: Fixture = {
  message: {
    "text":
      "This is expandable_blockquote\nWhen a clown moves into a palace, he doesn't become a king. The palace becomes a circus.\n— Turkish Proverb",
    "entities": [
      {
        "offset": 30,
        "length": 106,
        "type": "expandable_blockquote",
      },
    ],
  },
  expected: {
    html:
      `This is expandable_blockquote\n<blockquote class="tg-expandable-blockquote">When a clown moves into a palace, he doesn&#x27;t become a king. The palace becomes a circus.\n— Turkish Proverb</blockquote>`,
  },
};
