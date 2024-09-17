import type { Fixture } from "../utils/types.ts";

export const regularText: Fixture = {
  message: {
    "text": `<>&"'`,
  },
  expected: {
    html: `&lt;&gt;&amp;&quot;&#x27;`,
  },
};
