//// [tests/cases/compiler/callOverloads5.ts] ////

//// [callOverloads5.ts]
function Foo():Foo; // error
function Foo(s:string):Foo; // error
class Foo { // error
	bar1(s:string);
	bar1(n:number);
    bar1(a:any) { /*WScript.Echo(a);*/ }
    constructor(x: any) {
        // WScript.Echo("Constructor function has executed");
    }
}
//class Foo(s: String);

var f1 = new Foo("hey");


f1.bar1("a");
Foo();
Foo("s");


//// [callOverloads5.js]
class Foo {
    bar1(a) { }
    constructor(x) {
        // WScript.Echo("Constructor function has executed");
    }
}
//class Foo(s: String);
var f1 = new Foo("hey");
f1.bar1("a");
Foo();
Foo("s");
