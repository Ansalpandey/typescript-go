currentDirectory::/home/src/workspaces/solution
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/solution/project/index.ts] *new* 
import { x } from "../utils";
//// [/home/src/workspaces/solution/project/tsconfig.json] *new* 
{
    "references": [
        { "path": "../utils" },
    ],
}
//// [/home/src/workspaces/solution/utils/index.d.ts] *new* 
export declare const x = 10;
//// [/home/src/workspaces/solution/utils/index.ts] *new* 
export const x = 10;
//// [/home/src/workspaces/solution/utils/tsconfig.json] *new* 
{
    "compilerOptions": {
        "composite": true
    }
}

tsgo --p project
ExitStatus:: Success
Output::
//// [/home/src/tslibs/TS/Lib/lib.d.ts] *Lib*
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
interface SymbolConstructor {
    (desc?: string | number): symbol;
    for(name: string): symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}
declare const console: { log(msg: any): void; };
//// [/home/src/workspaces/solution/project/index.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


