import type { Fixture } from "../../utils/types.ts";

export const code: Fixture = {
  message: {
    "text": "This is code monowidth string",
    "entities": [
      {
        "offset": 13,
        "length": 16,
        "type": "code",
      },
    ],
  },
  expected: {
    html: 'This is code <code class="tg-code">monowidth string</code>',
  },
};
