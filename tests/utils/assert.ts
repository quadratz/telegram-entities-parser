import type { Message } from "../../src/types/message.ts";
import { EntitiesParser } from "../../mod.ts";
import { assertStrictEquals } from "jsr:@std/assert@1.0.6";
import type { Fixture } from "./types.ts";

const entityParserHtml = new EntitiesParser({});
const html = (message: Message) => entityParserHtml.parse({ message });

export function assert(
  { message, expected: { html: expectedHtml } }: Fixture,
) {
  const result = html(message);
  assertStrictEquals(result, expectedHtml);
}
