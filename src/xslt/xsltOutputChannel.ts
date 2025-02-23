import { Disposable, OutputChannel, window } from "vscode";

class XSLTOutputChannel implements Disposable {
    private readonly channel: OutputChannel = window.createOutputChannel("XSLT");

    public appendLine(message: any, title?: string): void {
        if (title) {
            const simplifiedTime: string = (new Date()).toISOString().replace(/z|t/gi, " ").trim(); // YYYY-MM-DD
                                                                                                    // HH:mm:ss.sss
            const highlightingTitle: string = `[${title} ${simplifiedTime}]`;
            this.channel.appendLine(highlightingTitle);
        }
        this.channel.appendLine(message.toString());
    }

    public append(message: any): void {
        this.channel.append(message);
    }

    public show(): void {
        this.channel.show();
    }

    public dispose(): void {
        this.channel.dispose();
    }

    public clear(): void {
        this.channel.clear();
    }
}

export const xsltOutputChannel: XSLTOutputChannel = new XSLTOutputChannel();