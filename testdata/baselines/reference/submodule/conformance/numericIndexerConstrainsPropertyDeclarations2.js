//// [tests/cases/conformance/types/objectTypeLiteral/indexSignatures/numericIndexerConstrainsPropertyDeclarations2.ts] ////

//// [numericIndexerConstrainsPropertyDeclarations2.ts]
// String indexer providing a constraint of a user defined type

class A {
    foo(): string { return ''; }
}

class B extends A {
    bar(): string { return ''; }
}

class Foo {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
}

interface Foo2 {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
}

var a: {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
};

// error
var b: { [x: number]: A } = {
    1.0: new A(), 
    2.0: new B(), 
    "2.5": new B(),
    3.0: 1,
    "4.0": ''
}

//// [numericIndexerConstrainsPropertyDeclarations2.js]
// String indexer providing a constraint of a user defined type
class A {
    foo() { return ''; }
}
class B extends A {
    bar() { return ''; }
}
class Foo {
    1.0; // ok
    2.0; // ok
    "2.5"; // ok
    3.0; // error
    "4.0"; // error
}
var a;
// error
var b = {
    1.0: new A(),
    2.0: new B(),
    "2.5": new B(),
    3.0: 1,
    "4.0": ''
};
