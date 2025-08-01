//// [tests/cases/conformance/types/stringLiteral/stringLiteralTypesAndTuples01.ts] ////

//// [stringLiteralTypesAndTuples01.ts]
// Should all be strings.
let [hello, brave, newish, world] = ["Hello", "Brave", "New", "World"];

type RexOrRaptor = "t-rex" | "raptor"
let [im, a, dinosaur]: ["I'm", "a", RexOrRaptor] = ['I\'m', 'a', 't-rex'];

rawr(dinosaur);

function rawr(dino: RexOrRaptor) {
    if (dino === "t-rex") {
        return "ROAAAAR!";
    }
    if (dino === "raptor") {
        return "yip yip!";
    }

    throw "Unexpected " + dino;
}

//// [stringLiteralTypesAndTuples01.js]
// Should all be strings.
let [hello, brave, newish, world] = ["Hello", "Brave", "New", "World"];
let [im, a, dinosaur] = ['I\'m', 'a', 't-rex'];
rawr(dinosaur);
function rawr(dino) {
    if (dino === "t-rex") {
        return "ROAAAAR!";
    }
    if (dino === "raptor") {
        return "yip yip!";
    }
    throw "Unexpected " + dino;
}


//// [stringLiteralTypesAndTuples01.d.ts]
// Should all be strings.
declare let hello: string, brave: string, newish: string, world: string;
type RexOrRaptor = "t-rex" | "raptor";
declare let im: "I'm", a: "a", dinosaur: RexOrRaptor;
declare function rawr(dino: RexOrRaptor): "ROAAAAR!" | "yip yip!";
