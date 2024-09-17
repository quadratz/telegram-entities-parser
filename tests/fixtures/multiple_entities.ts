import type { Fixture } from "../utils/types.ts";

export const multipleEntities: Fixture = {
  message: {
    "text": "This is bold italic strikethrough monospace",
    "entities": [
      {
        "offset": 8,
        "length": 4,
        "type": "bold",
      },
      {
        "offset": 13,
        "length": 6,
        "type": "italic",
      },
      {
        "offset": 20,
        "length": 13,
        "type": "strikethrough",
      },
      {
        "offset": 34,
        "length": 9,
        "type": "code",
      },
    ],
  },
  expected: {
    html:
      'This is <b class="tg-bold">bold</b> <i class="tg-italic">italic</i> <del class="tg-strikethrough">strikethrough</del> <code class="tg-code">monospace</code>',
  },
};
