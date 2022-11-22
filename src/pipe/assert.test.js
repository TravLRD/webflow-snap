import { test, describe, expect } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { assert, assertNot, ifUndefThen } from "./assert";
import { _pipe_ } from "./pipe";


describe("assert function", () => {

    test("assert true", () => {
        assert(42)(42);
        expect(() => assert(42)(43)).toThrow();
    });

    test("assertNot true", () => {
        assertNot(42)(43);
        expect(() => assertNot(42)(42)).toThrow();
    });

    test("returns the given value", _pipe_([
        42,
        assert(42),
        expectToBe(42),
    ]));

});

describe("ifUndefThen function", () => {

    test("returns the value", _pipe_([
        42,
        ifUndefThen(43),
        expectToBe(42),
    ]));

    test("returns the default value", _pipe_([
        undefined,
        ifUndefThen(43),
        expectToBe(43),
    ]));

})