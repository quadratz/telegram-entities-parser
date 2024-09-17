/**
 * Escapes text for safe interpolation into HTML text content.
 *
 * This is necessary to prevent XSS attacks and ensure that the HTML is rendered correctly.
 *
 * @example Usage
 * ```ts
 * const escaped = escapeHtml('Hello <World> & "Goodbye"');
 * console.log(escaped); // 'Hello &lt;World&gt; &amp; &quot;Goodbye&quot;'
 * ```
 *
 * @param {string} text - The string to escape.
 * @returns {string} The escaped string.
 */
export const escapeHtml: TextSanitizer = (text: string): string =>
  text.replace(/[<>&"']/g, (match) => {
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
 * For an example implementation, see {@linkcode escapeHtml}.
 */
export interface TextSanitizer {
  (text: string): string;
}
