import type { Fixture } from "../../utils/types.ts";

export const strikethrough: Fixture = {
  message: {
    "text": "This is strikethrough strikethrough text",
    "entities": [
      {
        "offset": 22,
        "length": 18,
        "type": "strikethrough",
      },
    ],
  },
  expected: {
    html:
      'This is strikethrough <del class="tg-strikethrough">strikethrough text</del>',
  },
};
