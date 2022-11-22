import { describe, expect, test } from "vitest";
import { _compose_, _pipe_ } from "./pipe";
import { promise, expectToBe, expectToEqual } from "../lib/test-helpers";
import { increaseBy } from "./increaseBy";
import { is } from "./boolean";
import { fillIntoTemplate } from "./string";

describe("pipe_ function", () => {

    test("passes value", _pipe_([
        42,
        expectToBe(42),
    ]));

    test("awaits promise value", _pipe_([
        promise(42),
        expectToBe(42),
    ]));

    test("awaits array of promise values", _pipe_([
        [promise(42), promise(43)],
        expectToEqual([42, 43]),
    ]));

    test("works on stack", _pipe_([
        42,
        1,
        increaseBy,
        expectToBe(43),
    ]));


    test("the functions are being called", async () => {
        await expect(_pipe_([
            () => {
                throw "Error";
            },
        ])()).rejects.toBe("Error");
    });
});

describe("compose_ function", () => {

    test("composes functions", _pipe_([
        promise(42),
        _compose_([fillIntoTemplate, promise("The answer is {}.")]),
        expectToBe("The answer is 42."),
    ]));

});