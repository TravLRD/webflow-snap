import { describe, expect, test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { add, assertValidNumber, isGt, isGte, isLt, isLte, substract } from "./number";
import { _pipe_ } from "./pipe";

const testWithInvalidParams = (infixOperator) => {
    test("faulty edge cases", () => {
        expect(() => infixOperator(42)(undefined)).toThrow();
        expect(() => infixOperator(42)(NaN)).toThrow();
        expect(() => infixOperator(42)("42")).toThrow();
        expect(() => infixOperator(undefined)(42)).toThrow();
        expect(() => infixOperator(NaN)(42)).toThrow();
        expect(() => infixOperator("42")(42)).toThrow();
    });
};

test("assertValidNumber function", () => {
    expect(() => assertValidNumber(undefined)).toThrow();
    expect(() => assertValidNumber(NaN)).toThrow();
    expect(() => assertValidNumber("42")).toThrow();
    expect(assertValidNumber(42)).toBe(42);
});

describe("isLt function", () => {
    test("less   ", _pipe_([42, isLt(43), expectToBe(true),]));
    test("equal  ", _pipe_([42, isLt(42), expectToBe(false),]));
    test("greater", _pipe_([42, isLt(41), expectToBe(false),]));
    testWithInvalidParams(isLt);
});

describe("isLte function", () => {
    test("less   ", _pipe_([42, isLte(43), expectToBe(true),]));
    test("equal  ", _pipe_([42, isLte(42), expectToBe(true),]));
    test("greater", _pipe_([42, isLte(41), expectToBe(false),]));
    testWithInvalidParams(isLte);
});

describe("isGt function", () => {
    test("less   ", _pipe_([42, isGt(43), expectToBe(false),]));
    test("equal  ", _pipe_([42, isGt(42), expectToBe(false),]));
    test("greater", _pipe_([42, isGt(41), expectToBe(true),]));
    testWithInvalidParams(isGt);
});

describe("isGte function", () => {
    test("less   ", _pipe_([42, isGte(43), expectToBe(false),]));
    test("equal  ", _pipe_([42, isGte(42), expectToBe(true),]));
    test("greater", _pipe_([42, isGte(41), expectToBe(true),]));
    testWithInvalidParams(isGte);
});

describe("add function", () => {
    test("add", _pipe_([42, add(43), expectToBe(85),]));
    testWithInvalidParams(add);
});

describe("substract function", () => {
    test("substract", _pipe_([42, substract(43), expectToBe(-1),]));
    testWithInvalidParams(substract);
});
