// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "loop" is now active!');
  vscode.window.registerWebviewViewProvider(
    "loop.customView",
    new CustomViewProvider()
  );
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

class CustomViewProvider implements vscode.WebviewViewProvider {
  private webviewView: vscode.WebviewView | undefined;

  // Called when the view is first created
  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.webviewView = webviewView;
    this.updateWebview();
    this.webviewView.webview.html = getHtml();
  }

  // Called when the view is updated (e.g., when the content or settings change)
  private updateWebview(): void {
    if (this.webviewView) {
      this.webviewView.webview.html = getHtml();
    }
  }
}

function getHtml(): string {
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
export function deactivate() {}
