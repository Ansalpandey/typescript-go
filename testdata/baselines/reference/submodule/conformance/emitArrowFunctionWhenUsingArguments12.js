//// [tests/cases/conformance/es6/arrowFunction/emitArrowFunctionWhenUsingArguments12.ts] ////

//// [emitArrowFunctionWhenUsingArguments12.ts]
class C {
    f(arguments) {
        var a = () => arguments;
    }
}

//// [emitArrowFunctionWhenUsingArguments12.js]
class C {
    f(arguments) {
        var a = () => arguments;
    }
}
