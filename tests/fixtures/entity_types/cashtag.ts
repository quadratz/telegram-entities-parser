import type { Fixture } from "../../utils/types.ts";

export const cashtag: Fixture = {
  message: {
    "text": "This is cashtag $IDR",
    "entities": [
      {
        "offset": 16,
        "length": 8,
        "type": "cashtag",
      },
    ],
  },
  expected: {
    html: 'This is cashtag <span class="tg-cashtag">$IDR</span>',
  },
};
