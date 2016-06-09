// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/node-sass/node-sass.d.ts
declare module "node-sass" {
    interface Importer {
        (url: string, prev: string, done: (data: { file: string; contents: string; }) => void): void;
    }

    interface Options {
        file?: string;
        data?: string;
        importer?: Importer | Importer[];
        functions?: { [key: string]: Function };
        includePaths?: string[];
        indentedSyntax?: boolean;
        indentType?: string;
        indentWidth?: number;
        linefeed?: string;
        omitSourceMapUrl?: boolean;
        outFile?: string;
        outputStyle?: string;
        precision?: number;
        sourceComments?: boolean;
        sourceMap?: boolean | string;
        sourceMapContents?: boolean;
        sourceMapEmbed?: boolean;
        sourceMapRoot?: boolean;
    }

    interface SassError extends Error {
        message: string;
        line: number;
        column: number;
        status: number;
        file: string;
    }

    interface Result {
        css: Buffer;
        map: Buffer;
        stats: {
            entry: string;
            start: number;
            end: number;
            duration: number;
            includedFiles: string[];
        }
    }

    export function render(options: Options, callback: (err: SassError, result: Result) => any): void;
    export function renderSync(options: Options): Result;
}