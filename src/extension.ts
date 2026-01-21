import * as vscode from "vscode";
import { AIFixProvider } from "./codeActions";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider("*", new AIFixProvider(), {
      providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
    }),
  );
}

export function deactivate() {}
