import type { Fixture } from "../utils/types.ts";

export const captionMessage: Fixture = {
  message: {
    "message_id": 1780179,
    "from": {
      "id": 423623658,
      "is_bot": false,
      "first_name": "Qz",
      "username": "quadratz",
      "language_code": "en",
    },
    "chat": {
      "id": 423623658,
      "first_name": "Qz",
      "username": "quadratz",
      "type": "private",
    },
    "date": 1726135217,
    "photo": [
      {
        "file_id":
          "AgACAgUAAxkBAAEbKdNm4ruxAw6vn68lbhZKr0T49xWzxgACd8UxG5vUEFeGdxW4pkSkIAEAAwIAA20AAzYE",
        "file_unique_id": "AQADd8UxG5vUEFdy",
        "file_size": 321,
        "width": 80,
        "height": 71,
      },
    ],
    "caption": "This is caption bold italic spoiler",
    "caption_entities": [
      {
        "offset": 16,
        "length": 4,
        "type": "bold",
      },
      {
        "offset": 21,
        "length": 6,
        "type": "italic",
      },
      {
        "offset": 28,
        "length": 7,
        "type": "spoiler",
      },
    ],
  },
  expected: {
    html:
      'This is caption <b class="tg-bold">bold</b> <i class="tg-italic">italic</i> <span class="tg-spoiler">spoiler</span>',
  },
};
