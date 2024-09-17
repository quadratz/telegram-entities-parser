import type { Fixture } from "../../utils/types.ts";

export const email: Fixture = {
  message: {
    "text": "This is email mailme@proton.me",
    "entities": [
      {
        "offset": 14,
        "length": 16,
        "type": "email",
      },
    ],
  },
  expected: {
    html:
      'This is email <a class="tg-email" href="mailto:mailme@proton.me">mailme@proton.me</a>',
  },
};
