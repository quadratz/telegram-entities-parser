import type { Fixture } from "../../utils/types.ts";

export const hashtag: Fixture = {
  message: {
    "text": "This is hashtag #hashtag",
    "entities": [
      {
        "offset": 16,
        "length": 8,
        "type": "hashtag",
      },
    ],
  },
  expected: {
    html: 'This is hashtag <span class="tg-hashtag">#hashtag</span>',
  },
};
