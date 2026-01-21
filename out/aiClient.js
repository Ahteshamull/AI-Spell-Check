"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAISuggestion = getAISuggestion;
const node_fetch_1 = __importDefault(require("node-fetch"));
const prompt_1 = require("./prompt");
async function getAISuggestion(text, apiKey) {
    const res = await (0, node_fetch_1.default)("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: (0, prompt_1.buildPrompt)(text) }],
        }),
    });
    const data = await res.json();
    return data.choices[0].message.content.trim();
}
//# sourceMappingURL=aiClient.js.map