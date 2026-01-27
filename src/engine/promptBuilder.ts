export function buildPrompt(text: string, tone: string): string {
  return `
Fix spelling, grammar and fluency.
Tone: ${tone}
Return only corrected text.

Text:
"${text}"
`;
}
