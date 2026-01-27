"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const quickFix_1 = require("./features/quickFix");
const autoFixOnSave_1 = require("./features/autoFixOnSave");
const sidePanel_1 = require("./ui/sidePanel");
function activate(context) {
    const sidebar = new sidePanel_1.AISidebarProvider();
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(sidePanel_1.AISidebarProvider.viewType, sidebar));
    context.subscriptions.push(vscode.commands.registerCommand("aiSpell.sendSelectionToChat", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        sidebar.send(editor.document.getText(editor.selection));
    }));
    (0, quickFix_1.registerQuickFix)(context);
    (0, autoFixOnSave_1.registerAutoFixOnSave)(context);
}
function deactivate() { }
