export function parseResponse(text: string): string {
  return text.replace(/^"|"$/g, "");
}
