import * as vscode from "vscode";
import { runAI } from "../engine/aiEngine";
import { parseResponse } from "../engine/responseParser";
import { shouldIgnore } from "./ignoreWords";

export function registerQuickFix(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      "*",
      {
        async provideCodeActions(
          doc: vscode.TextDocument,
          range: vscode.Range,
        ) {
          const text = doc.getText(range);
          if (!text || shouldIgnore(text)) return;

          const fix = new vscode.CodeAction(
            "Fix with AI Spell Check",
            vscode.CodeActionKind.QuickFix,
          );

          fix.command = {
            command: "aiSpell.applyFix",
            title: "Apply",
            arguments: [doc, range, text],
          };

          return [fix];
        },
      },
      { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "aiSpell.applyFix",
      async (doc: vscode.TextDocument, range: vscode.Range, text: string) => {
        const improved = parseResponse(await runAI(text));
        const edit = new vscode.WorkspaceEdit();
        edit.replace(doc.uri, range, improved);
        await vscode.workspace.applyEdit(edit);
      },
    ),
  );
}
