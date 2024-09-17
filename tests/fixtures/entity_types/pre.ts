import type { Fixture } from "../../utils/types.ts";

export const pre: Fixture = {
  message: {
    "text": "This is pre\nmonowidth block\nmonowidth block\nmonowidth block",
    "entities": [
      {
        "offset": 12,
        "length": 47,
        "type": "pre",
      },
    ],
  },
  expected: {
    html:
      'This is pre\n<pre class="tg-pre">monowidth block\nmonowidth block\nmonowidth block</pre>',
  },
};
