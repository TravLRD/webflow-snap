import { describe, test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { and, _if_, is, isFalse, isNot, isTrue, not } from "./boolean";
import { increaseBy } from "./increaseBy";
import { _pipe_ } from "./pipe";



describe("_if_ function", () => {

    test("true", _pipe_([
        42,
        _if_([is(42)], {
            then: increaseBy(1),
        }),
        expectToBe(43),
    ]));

    test("false", _pipe_([
        42,
        _if_([is(420)], {
            then: increaseBy(1),
        }),
        expectToBe(42),
    ]));


});


describe("is function", () => {
    const myObject = {};

    test("same", _pipe_([
        myObject,
        is(myObject),
        expectToBe(true),
    ]));

    test("different", _pipe_([
        {},
        is({}),
        expectToBe(false),
    ]));


});



describe("isNot function", () => {
    const myObject = {};

    test("same", _pipe_([
        myObject,
        isNot(myObject),
        expectToBe(false),
    ]));

    test("different", _pipe_([
        {},
        isNot({}),
        expectToBe(true),
    ]));
});



describe("not function", () => {

    test("true", _pipe_([
        true,
        not,
        expectToBe(false),
    ]));

    test("false", _pipe_([
        false,
        not,
        expectToBe(true),
    ]));

});


describe("and function", () => {

    test("true - true", _pipe_([
        true,
        and(true),
        expectToBe(true),
    ]));

    test("true - false", _pipe_([
        true,
        and(false),
        expectToBe(false),
    ]));

    test("false - true", _pipe_([
        false,
        and(true),
        expectToBe(false),
    ]));

    test("false - false", _pipe_([
        false,
        and(false),
        expectToBe(false),
    ]));

});



describe("isTrue function", () => {

    test("true", _pipe_([
        true,
        isTrue,
        expectToBe(true),
    ]));

    test("false", _pipe_([
        false,
        isTrue,
        expectToBe(false),
    ]));

});



describe("isFalse function", () => {

    test("true", _pipe_([
        true,
        isFalse,
        expectToBe(false),
    ]));

    test("false", _pipe_([
        false,
        isFalse,
        expectToBe(true),
    ]));

});

