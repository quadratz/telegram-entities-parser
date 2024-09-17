import type { Message } from "../../types.ts";

export const message: Message = {
  "text": "bold&<>italic",
  "entities": [
    {
      "offset": 0,
      "length": 5,
      "type": "bold",
    },
    {
      "offset": 6,
      "length": 7,
      "type": "italic",
    },
  ],
};
