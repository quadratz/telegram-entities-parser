import type { Fixture } from "../utils/types.ts";

export const specialCharacters: Fixture = {
  message: {
    "text": `<>&"'&`,
    "entities": [
      {
        "offset": 0,
        "length": 1,
        "type": "bold",
      },
      {
        "offset": 1,
        "length": 1,
        "type": "italic",
      },
      {
        "offset": 2,
        "length": 1,
        "type": "underline",
      },
      {
        "offset": 3,
        "length": 1,
        "type": "code",
      },
      {
        "offset": 5,
        "length": 1,
        "type": "spoiler",
      },
    ],
  },
  expected: {
    html:
      `<b class="tg-bold">&lt;</b><i class="tg-italic">&gt;</i><span class="tg-underline">&amp;</span><code class="tg-code">&quot;</code>&#x27;<span class="tg-spoiler">&amp;</span>`,
  },
};
