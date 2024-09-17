import type { Fixture } from "../../utils/types.ts";

export const custom_emoji: Fixture = {
  message: {
    "text": "This is custom_emoji 🎂",
    "entities": [
      {
        "offset": 21,
        "length": 2,
        type: "custom_emoji",
        "custom_emoji_id": "1000000000000000001",
      },
    ],
  },
  expected: {
    html:
      'This is custom_emoji <span class="tg-custom-emoji" data-custom-emoji-id="1000000000000000001">🎂</span>',
  },
};
