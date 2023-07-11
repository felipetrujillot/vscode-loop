"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "loop" is now active!');
    vscode.window.registerWebviewViewProvider("loop.customView", new CustomViewProvider());
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("loop.helloWorld", () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // Register the webview panel
        /* const panel = vscode.window.createWebviewPanel(
          "loop.customView", // Unique identifier for your view
          "Custom View", // Title of the panel
          vscode.ViewColumn.One, // Column to show the panel in
          {
            enableScripts: true, // Enable JavaScript in the webview
          }
        );
        panel.webview.html = getHtml(); */
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
class CustomViewProvider {
    // Called when the view is first created
    resolveWebviewView(webviewView) {
        this.webviewView = webviewView;
        this.updateWebview();
        this.webviewView.webview.html = getHtml();
    }
    // Called when the view is updated (e.g., when the content or settings change)
    updateWebview() {
        if (this.webviewView) {
            this.webviewView.webview.html = getHtml();
        }
    }
}
function getHtml() {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Custom View</title>
            </head>
            <body>
                <h1>Welcome to Custom View!</h1>
                <p>This is the content of my custom view.</p>
            </body>
        </html>
    `;
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map