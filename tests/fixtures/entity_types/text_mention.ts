import type { Fixture } from "../../utils/types.ts";

export const text_mentionWithoutUsername: Fixture = {
  message: {
    "text": "This is text_mention No Name",
    "entities": [
      {
        "offset": 21,
        "length": 7,
        "type": "text_mention",
        "user": {
          "id": 100000000,
          "is_bot": false,
          "first_name": "No",
          "last_name": "Name",
          "language_code": "en",
        },
      },
    ],
  },
  expected: {
    html:
      'This is text_mention <a class="tg-text-mention" href="tg://user?id=100000000">No Name</a>',
  },
};

/**
 * According to Telegram's API documentation, text_mention is used for
 * users without a username.
 * However, we'll still check for a username to be safe.
 *
 * @see https://core.telegram.org/bots/api#messageentity
 */
export const text_mentionWithUsername: Fixture = {
  message: {
    "text": "This is text_mention No Name",
    "entities": [
      {
        "offset": 21,
        "length": 7,
        "type": "text_mention",
        "user": {
          "id": 100000000,
          "is_bot": false,
          "first_name": "No",
          "last_name": "Name",
          "language_code": "en",
          "username": "username",
        },
      },
    ],
  },
  expected: {
    html:
      'This is text_mention <a class="tg-text-mention" href="https://t.me/username">No Name</a>',
  },
};
