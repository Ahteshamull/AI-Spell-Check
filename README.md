# AI Spell Check for VS Code

🔍 **Free AI-powered spell & grammar checker with sidebar chat**

## Features

- **🚀 Quick Fix**: Select text → `Ctrl + .` → "Fix with AI Spell Check"
- **💬 AI Chat**: Interactive sidebar chat for grammar assistance
- **⚙️ Configurable**: Custom API key, tone settings, ignore words
- **🔧 Auto-fix**: Optional automatic correction on save
- **🔒 Privacy-first**: Your text stays private, free forever

## Installation

1. Install the extension from VSCode Marketplace
2. Add your OpenAI API key in VSCode settings:
   ```json
   {
     "aiSpell.apiKey": "your-openai-api-key"
   }
   ```

## Configuration

| Setting                 | Type    | Default          | Description                                 |
| ----------------------- | ------- | ---------------- | ------------------------------------------- |
| `aiSpell.apiKey`        | string  | `""`             | Your OpenAI API key                         |
| `aiSpell.tone`          | string  | `"professional"` | Writing tone (professional/casual/friendly) |
| `aiSpell.ignoreWords`   | array   | `[]`             | Words to ignore during spell check          |
| `aiSpell.autoFixOnSave` | boolean | `false`          | Automatically fix errors on save            |

## Usage

### Quick Fix

1. Select any text in your editor
2. Press `Ctrl + .` (or `Cmd + .` on Mac)
3. Choose "Fix with AI Spell Check"

### Sidebar Chat

1. Open the AI Spell panel from the Activity Bar
2. Type your text or questions about grammar
3. Get instant AI-powered suggestions

### Send Selection to Chat

1. Select text in your editor
2. Right-click and choose "Send Selection to AI Chat"
3. The text appears in the sidebar chat for discussion

## Requirements

- VS Code 1.80.0 or higher
- OpenAI API key (uses GPT-4o-mini model)

## Privacy & Security

- Your text is sent directly to OpenAI's API for processing
- No data is stored on our servers
- API key is stored locally in your VSCode settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

---

**Made with ❤️ for better writing**
