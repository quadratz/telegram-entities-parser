import { assert } from "./utils/assert.ts";
import { multipleEntities } from "./fixtures/multiple_entities.ts";
import { nestedEntities } from "./fixtures/nested_entities.ts";
import { captionMessage } from "./fixtures/caption_message.ts";
import {
  blockquote,
  bold,
  bot_command,
  cashtag,
  code,
  custom_emoji,
  email,
  expandable_blockquote,
  hashtag,
  italic,
  mention,
  phone_number,
  pre,
  pre_code,
  spoiler,
  strikethrough,
  text_link,
  text_mentionWithoutUsername,
  text_mentionWithUsername,
  underline,
  url,
} from "./fixtures/entity_types/mod.ts";
import { specialCharacters } from "./fixtures/special_characters.ts";
import { regularText } from "./fixtures/regular_text.ts";

Deno.test("Should parse all types of entities.", async (t) => {
  await t.step("blockquote", () => assert(blockquote));
  await t.step("bold", () => assert(bold));
  await t.step("bot_command", () => assert(bot_command));
  await t.step("cashtag", () => assert(cashtag));
  await t.step("code", () => assert(code));
  await t.step("custom_emoji", () => assert(custom_emoji));
  await t.step("email", () => assert(email));
  await t.step("expandable_blockquote", () => assert(expandable_blockquote));
  await t.step("hashtag", () => assert(hashtag));
  await t.step("italic", () => assert(italic));
  await t.step("mention", () => assert(mention));
  await t.step("phone_number", () => assert(phone_number));
  await t.step("pre_code", () => assert(pre_code));
  await t.step("pre", () => assert(pre));
  await t.step("spoiler", () => assert(spoiler));
  await t.step("strikethrough", () => assert(strikethrough));
  await t.step("text_link", () => assert(text_link));
  await t.step(
    "text_mention with username",
    () => assert(text_mentionWithUsername),
  );
  await t.step(
    "text_mention without username",
    () => assert(text_mentionWithoutUsername),
  );
  await t.step("underline", () => assert(underline));
  await t.step("url", () => assert(url));
});

Deno.test("Should parse multiple entities in single text", () =>
  assert(multipleEntities));

Deno.test("Should parse nested entities", () => assert(nestedEntities));

Deno.test("Should parse caption entities", () => assert(captionMessage));

Deno.test("Should escape special characters", () => assert(specialCharacters));

Deno.test("Should escape special characters in regular text", () =>
  assert(regularText));
