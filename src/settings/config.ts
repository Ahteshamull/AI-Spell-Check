import * as vscode from "vscode";

export function getConfig<T>(key: string): T {
  return vscode.workspace.getConfiguration("aiSpell").get<T>(key)!;
}
