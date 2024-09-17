import type { Fixture } from "../utils/types.ts";

export const nestedEntities: Fixture = {
  message: {
    "text": "Nobody is coming to save you. Get up. Be your own hero.",
    "entities": [
      // 0
      {
        "offset": 10,
        "length": 2,
        "type": "bold",
      },
      // 1
      {
        "offset": 12,
        "length": 8,
        "type": "bold",
      },
      // 2
      {
        "offset": 12,
        "length": 8,
        "type": "italic",
      },
      // 3
      {
        "offset": 20,
        "length": 10,
        "type": "italic",
      },
      // 4
      {
        "offset": 20,
        "length": 9,
        "type": "bold",
      },
      // 5
      {
        "offset": 20,
        "length": 4,
        "type": "underline",
      },
      {
        "offset": 30,
        "length": 8,
        "type": "spoiler",
      },
      {
        "offset": 30,
        "length": 7,
        "type": "italic",
      },
    ],
  },
  expected: {
    html:
      'Nobody is <b class="tg-bold">co</b><b class="tg-bold"><i class="tg-italic">ming to </i></b><i class="tg-italic"><b class="tg-bold"><span class="tg-underline">save</span> you.</b> </i><span class="tg-spoiler"><i class="tg-italic">Get up.</i> </span>Be your own hero.',
  },
};
