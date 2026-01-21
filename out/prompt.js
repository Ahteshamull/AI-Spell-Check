"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPrompt = buildPrompt;
function buildPrompt(text) {
    return `
Fix spelling, grammar, and clarity.
Return only the corrected text.

Text:
"${text}"
`;
}
//# sourceMappingURL=prompt.js.map