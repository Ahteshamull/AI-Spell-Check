import * as vscode from "vscode";
import { getAISuggestion } from "./aiClient";

export class AIFixProvider implements vscode.CodeActionProvider {
  async provideCodeActions(document: vscode.TextDocument, range: vscode.Range) {
    const text = document.getText(range);
    if (!text || text.length < 5) return;

    const apiKey = vscode.workspace
      .getConfiguration()
      .get<string>("aiSpell.apiKey");

    if (!apiKey) return;

    const suggestion = await getAISuggestion(text, apiKey);

    const action = new vscode.CodeAction(
      "Fix with AI Spell Check",
      vscode.CodeActionKind.QuickFix,
    );

    action.edit = new vscode.WorkspaceEdit();
    action.edit.replace(document.uri, range, suggestion);

    return [action];
  }
}
