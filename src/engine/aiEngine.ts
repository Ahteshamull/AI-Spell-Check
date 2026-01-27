import { buildPrompt } from "./promptBuilder";
import { getConfig } from "../settings/config";

export async function runAI(text: string): Promise<string> {
  const apiKey = getConfig<string>("apiKey");
  const tone = getConfig<string>("tone");

  if (!apiKey) throw new Error("AI Spell Check: API key missing");

  const res = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: buildPrompt(text, tone) }]
      })
    }
  );

  const data = await res.json();
  return data.choices[0].message.content.trim();
}
