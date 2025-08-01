package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestQuickInfoDisplayPartsModules(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `namespace /*1*/m {
    var /*2*/namespaceElemWithoutExport = 10;
    export var /*3*/namespaceElemWithExport = 10;
}
var /*4*/a = /*5*/m;
var /*6*/b: typeof /*7*/m;
namespace /*8*/m1./*9*/m2 {
    var /*10*/namespaceElemWithoutExport = 10;
    export var /*11*/namespaceElemWithExport = 10;
}
var /*12*/x = /*13*/m1./*14*/m2;
var /*15*/y: typeof /*16*/m1./*17*/m2;`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineHover(t)
}
