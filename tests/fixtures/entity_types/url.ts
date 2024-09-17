import type { Fixture } from "../../utils/types.ts";

export const url: Fixture = {
  message: {
    "text": "This is url telegram.org",
    "entities": [
      {
        "offset": 12,
        "length": 12,
        "type": "url",
      },
    ],
  },
  expected: {
    html: 'This is url <a class="tg-url" href="telegram.org">telegram.org</a>',
  },
};
