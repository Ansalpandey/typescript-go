//// [tests/cases/conformance/es2020/constructBigint.ts] ////

//// [constructBigint.ts]
BigInt(1);
BigInt(1n);
BigInt("0");
BigInt(false);

BigInt(Symbol());
BigInt({ e: 1, m: 1 })
BigInt(null);
BigInt(undefined)



//// [constructBigint.js]
BigInt(1);
BigInt(1n);
BigInt("0");
BigInt(false);
BigInt(Symbol());
BigInt({ e: 1, m: 1 });
BigInt(null);
BigInt(undefined);
