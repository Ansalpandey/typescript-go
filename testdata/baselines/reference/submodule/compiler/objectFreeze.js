//// [tests/cases/compiler/objectFreeze.ts] ////

//// [objectFreeze.ts]
const f = Object.freeze(function foo(a: number, b: string) { return false; });
f(1, "") === false;

class C { constructor(a: number) { } }
const c = Object.freeze(C);
new c(1);

const a = Object.freeze([1, 2, 3]);
a[0] = a[2].toString();

const o = Object.freeze({ a: 1, b: "string", c: true });
o.b = o.a.toString();


//// [objectFreeze.js]
const f = Object.freeze(function foo(a, b) { return false; });
f(1, "") === false;
class C {
    constructor(a) { }
}
const c = Object.freeze(C);
new c(1);
const a = Object.freeze([1, 2, 3]);
a[0] = a[2].toString();
const o = Object.freeze({ a: 1, b: "string", c: true });
o.b = o.a.toString();
