//// [tests/cases/conformance/expressions/nullishCoalescingOperator/nullishCoalescingOperator1.ts] ////

//// [nullishCoalescingOperator1.ts]
declare const a1: string | undefined | null
declare const a2: string | undefined | null
declare const a3: string | undefined | null
declare const a4: string | undefined | null

declare const b1: number | undefined | null
declare const b2: number | undefined | null
declare const b3: number | undefined | null
declare const b4: number | undefined | null

declare const c1: boolean | undefined | null
declare const c2: boolean | undefined | null
declare const c3: boolean | undefined | null
declare const c4: boolean | undefined | null

interface I { a: string }
declare const d1: I | undefined | null
declare const d2: I | undefined | null
declare const d3: I | undefined | null
declare const d4: I | undefined | null

const aa1 = a1 ?? 'whatever';
const aa2 = a2 ?? 'whatever';
const aa3 = a3 ?? 'whatever';
const aa4 = a4 ?? 'whatever';

const bb1 = b1 ?? 1;
const bb2 = b2 ?? 1;
const bb3 = b3 ?? 1;
const bb4 = b4 ?? 1;

const cc1 = c1 ?? true;
const cc2 = c2 ?? true;
const cc3 = c3 ?? true;
const cc4 = c4 ?? true;

const dd1 = d1 ?? {b: 1};
const dd2 = d2 ?? {b: 1};
const dd3 = d3 ?? {b: 1};
const dd4 = d4 ?? {b: 1};

// Repro from #34635

declare function foo(): void;

const maybeBool = false;

if (!(maybeBool ?? true)) {
    foo();
}

if (maybeBool ?? true) {
    foo();
}
else {
    foo();
}

if (false ?? true) {
    foo();
}
else {
    foo();
}


//// [nullishCoalescingOperator1.js]
const aa1 = a1 !== null && a1 !== void 0 ? a1 : 'whatever';
const aa2 = a2 !== null && a2 !== void 0 ? a2 : 'whatever';
const aa3 = a3 !== null && a3 !== void 0 ? a3 : 'whatever';
const aa4 = a4 !== null && a4 !== void 0 ? a4 : 'whatever';
const bb1 = b1 !== null && b1 !== void 0 ? b1 : 1;
const bb2 = b2 !== null && b2 !== void 0 ? b2 : 1;
const bb3 = b3 !== null && b3 !== void 0 ? b3 : 1;
const bb4 = b4 !== null && b4 !== void 0 ? b4 : 1;
const cc1 = c1 !== null && c1 !== void 0 ? c1 : true;
const cc2 = c2 !== null && c2 !== void 0 ? c2 : true;
const cc3 = c3 !== null && c3 !== void 0 ? c3 : true;
const cc4 = c4 !== null && c4 !== void 0 ? c4 : true;
const dd1 = d1 !== null && d1 !== void 0 ? d1 : { b: 1 };
const dd2 = d2 !== null && d2 !== void 0 ? d2 : { b: 1 };
const dd3 = d3 !== null && d3 !== void 0 ? d3 : { b: 1 };
const dd4 = d4 !== null && d4 !== void 0 ? d4 : { b: 1 };
const maybeBool = false;
if (!(maybeBool !== null && maybeBool !== void 0 ? maybeBool : true)) {
    foo();
}
if (maybeBool !== null && maybeBool !== void 0 ? maybeBool : true) {
    foo();
}
else {
    foo();
}
if (false !== null && false !== void 0 ? false : true) {
    foo();
}
else {
    foo();
}
