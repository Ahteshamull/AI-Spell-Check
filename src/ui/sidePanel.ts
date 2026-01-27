import * as vscode from "vscode";
import { runAI } from "../engine/aiEngine";

export class AISidebarProvider implements vscode.WebviewViewProvider {
  static readonly viewType = "aiSpell.chatView";
  private view?: vscode.WebviewView;

  resolveWebviewView(view: vscode.WebviewView) {
    this.view = view;
    view.webview.options = { enableScripts: true };
    view.webview.html = this.html();

    view.webview.onDidReceiveMessage(async (msg: any) => {
      if (msg.type === "ask") {
        const reply = await runAI(msg.text);
        view.webview.postMessage({ type: "reply", text: reply });
      }
    });
  }

  send(text: string) {
    this.view?.webview.postMessage({ type: "prefill", text });
  }

  private html() {
    return `
<!DOCTYPE html>
<html>
<body>
<div id="chat"></div>
<textarea id="input"></textarea>
<button onclick="send()">Send</button>
<script>
const vscode = acquireVsCodeApi();
const chat = document.getElementById("chat");

function send(){
  const t = input.value;
  chat.innerHTML += "<p>You: "+t+"</p>";
  vscode.postMessage({type:"ask", text:t});
  input.value="";
}

window.addEventListener("message", e=>{
  if(e.data.type==="reply")
    chat.innerHTML += "<p>AI: "+e.data.text+"</p>";
  if(e.data.type==="prefill")
    input.value = e.data.text;
});
</script>
</body>
</html>`;
  }
}
