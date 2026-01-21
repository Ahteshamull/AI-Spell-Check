import fetch from "node-fetch";
import { buildPrompt } from "./prompt";

export async function getAISuggestion(
  text: string,
  apiKey: string,
): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: buildPrompt(text) }],
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content.trim();
}
