export function buildPrompt(text: string): string {
  return `
Fix spelling, grammar, and clarity.
Return only the corrected text.

Text:
"${text}"
`;
}
