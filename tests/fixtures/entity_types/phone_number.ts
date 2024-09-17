import type { Fixture } from "../../utils/types.ts";

export const phone_number: Fixture = {
  message: {
    "text": "This is phone number +1-212-555-0123",
    "entities": [
      {
        "offset": 21,
        "length": 15,
        "type": "phone_number",
      },
    ],
  },
  expected: {
    html:
      'This is phone number <a class="tg-phone-number" href="tel:+1-212-555-0123">+1-212-555-0123</a>',
  },
};
