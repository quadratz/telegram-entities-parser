import type { Message } from "../../src/types/message.ts";

export interface Fixture {
  message: Message;
  expected: {
    html: string;
  };
}
