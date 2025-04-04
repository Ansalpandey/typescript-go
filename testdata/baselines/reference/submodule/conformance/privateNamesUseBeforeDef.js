//// [tests/cases/conformance/classes/members/privateNames/privateNamesUseBeforeDef.ts] ////

//// [privateNamesUseBeforeDef.ts]
class A {
    #foo = this.#bar; // Error
    #bar = 3;
}

class A2 {
    #foo = this.#bar(); // No Error
    #bar() { return 3 };
}

class A3 {
    #foo = this.#bar; // No Error
    get #bar() { return 3 };
}

class B {
    #foo = this.#bar; // Error
    #bar = this.#foo;
}


//// [privateNamesUseBeforeDef.js]
class A {
    #foo = this.#bar; // Error
    #bar = 3;
}
class A2 {
    #foo = this.#bar(); // No Error
    #bar() { return 3; }
    ;
}
class A3 {
    #foo = this.#bar; // No Error
    get #bar() { return 3; }
    ;
}
class B {
    #foo = this.#bar; // Error
    #bar = this.#foo;
}
