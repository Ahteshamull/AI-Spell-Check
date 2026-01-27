import * as vscode from "vscode";
import { getConfig } from "../settings/config";

export function registerAutoFixOnSave(
  context: vscode.ExtensionContext
) {
  context.subscriptions.push(
    vscode.workspace.onWillSaveTextDocument(() => {
      if (!getConfig<boolean>("autoFixOnSave")) return;
    })
  );
}
