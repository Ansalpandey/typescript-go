//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames44_ES5.ts] ////

//// [computedPropertyNames44_ES5.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    [s: string]: Foo2;
    get ["get1"]() { return new Foo }
}

class D extends C {
    set ["set1"](p: Foo) { }
}

//// [computedPropertyNames44_ES5.js]
class Foo {
    x;
}
class Foo2 {
    x;
    y;
}
class C {
    get ["get1"]() { return new Foo; }
}
class D extends C {
    set ["set1"](p) { }
}
