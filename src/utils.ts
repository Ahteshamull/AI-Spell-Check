export function formatText(text: string): string {
  return text.trim();
}

export function isValidText(text: string): boolean {
  return text.trim().length > 0;
}
