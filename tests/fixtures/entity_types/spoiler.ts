import type { Fixture } from "../../utils/types.ts";

export const spoiler: Fixture = {
  message: {
    "text": "This is spoiler DO NOT BE EVIL",
    "entities": [
      {
        "offset": 16,
        "length": 14,
        "type": "spoiler",
      },
    ],
  },
  expected: {
    html: 'This is spoiler <span class="tg-spoiler">DO NOT BE EVIL</span>',
  },
};
