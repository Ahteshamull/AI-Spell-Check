import * as vscode from "vscode";

export function createDiagnostic(
  document: vscode.TextDocument,
  range: vscode.Range,
  message: string,
): vscode.Diagnostic {
  const diagnostic = new vscode.Diagnostic(
    range,
    message,
    vscode.DiagnosticSeverity.Information,
  );
  diagnostic.source = "AI Spell Check";
  return diagnostic;
}
