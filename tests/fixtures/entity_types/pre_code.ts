import type { Fixture } from "../../utils/types.ts";

export const pre_code: Fixture = {
  message: {
    "text":
      'This is pre-code\nconsole.log("hello world");\nconsole.log("good bye world");',
    "entities": [
      {
        "offset": 17,
        "length": 58,
        "type": "pre",
        "language": "ts",
      },
    ],
  },
  expected: {
    html:
      'This is pre-code\n<pre class="tg-pre-code"><code class="language-ts">console.log(&quot;hello world&quot;);\nconsole.log(&quot;good bye world&quot;);</code></pre>',
  },
};
