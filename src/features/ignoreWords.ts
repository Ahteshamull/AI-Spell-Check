import { getConfig } from "../settings/config";

export function shouldIgnore(text: string): boolean {
  const ignore = getConfig<string[]>("ignoreWords") || [];
  return ignore.some(w =>
    text.toLowerCase().includes(w.toLowerCase())
  );
}
