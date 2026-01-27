import * as vscode from "vscode";
import { registerQuickFix } from "./features/quickFix";
import { registerAutoFixOnSave } from "./features/autoFixOnSave";
import { AISidebarProvider } from "./ui/sidePanel";

export function activate(context: vscode.ExtensionContext) {
  const sidebar = new AISidebarProvider();

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      AISidebarProvider.viewType,
      sidebar,
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("aiSpell.sendSelectionToChat", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      sidebar.send(editor.document.getText(editor.selection));
    }),
  );

  registerQuickFix(context);
  registerAutoFixOnSave(context);
}

export function deactivate() {}
