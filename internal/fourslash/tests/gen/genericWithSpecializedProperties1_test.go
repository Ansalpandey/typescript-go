package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGenericWithSpecializedProperties1(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `interface Foo<T> {
    x: Foo<string>;
    y: Foo<number>;
}
var f: Foo<number>;
var /*1*/xx = f.x;
var /*2*/yy = f.y;
var f2: Foo<string>;
var /*3*/x2 = f2.x;
var /*4*/y2 = f2.y;`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyQuickInfoAt(t, "1", "var xx: Foo<string>", "")
	f.VerifyQuickInfoAt(t, "2", "var yy: Foo<number>", "")
	f.VerifyQuickInfoAt(t, "3", "var x2: Foo<string>", "")
	f.VerifyQuickInfoAt(t, "4", "var y2: Foo<number>", "")
}
