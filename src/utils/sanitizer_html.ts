/**
 * Sanitize text for safe interpolation into HTML text content.
 *
 * This is necessary to prevent XSS attacks and ensure that the HTML is rendered correctly.
 *
 * @example Usage
 * ```ts
 * const text = 'Hello <World> & "Goodbye"'
 * const escaped = sanitizerHtml({ text });
 * console.log(escaped); // 'Hello &lt;World&gt; &amp; &quot;Goodbye&quot;'
 * ```
 *
 * @param {TextSanitizerOption} options
 * @param {TextSanitizerOption["text"]} options.text The string to escape.
 * @returns {string} The escaped string.
 */
export const sanitizerHtml: TextSanitizer = (
  options: TextSanitizerOption,
): string =>
  options.text.replace(/[<>&"']/g, (match) => {
    switch (match) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      default:
        return match;
    }
  });

/**
 * Represents a function that sanitizes text to prevent security vulnerabilities or formatting issues.
 *
 * For an example implementation, see {@linkcode sanitizerHtml}.
 */
export interface TextSanitizer {
  (options: TextSanitizerOption): string;
}

/**
 * Represent options for {@linkcode TextSanitizer} function.
 */
export interface TextSanitizerOption {
  text: string;
}
