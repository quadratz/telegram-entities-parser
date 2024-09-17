import type { Fixture } from "../../utils/types.ts";

export const mention: Fixture = {
  message: {
    "text": "This is mention @username",
    "entities": [
      {
        "offset": 16,
        "length": 9,
        "type": "mention",
      },
    ],
  },
  expected: {
    html:
      'This is mention <a class="tg-mention" href="https://t.me/username">@username</a>',
  },
};
