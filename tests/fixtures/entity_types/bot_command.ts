import type { Fixture } from "../../utils/types.ts";

export const bot_command: Fixture = {
  message: {
    "text": "This is bot_command /start@bot",
    "entities": [
      {
        "offset": 20,
        "length": 10,
        "type": "bot_command",
      },
    ],
  },
  expected: {
    html: 'This is bot_command <span class="tg-bot-command">/start@bot</span>',
  },
};
