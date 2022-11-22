import { describe, expect, test } from "vitest";
import { _compose_, _copy_, _paste_, _pipe_ } from "./pipe";
import { promise, expectToBe, expectToEqual } from "../lib/test-helpers";
import { is } from "./boolean";
import { fillIntoTemplate } from "./string";
import { add, substract } from "./number";

describe("pipe_ function", () => {

    test("passes value", _pipe_([
        42,
        expectToBe(42),
    ]));

    test("awaits promise", _pipe_([
        promise(42),
        expectToBe(42),
    ]));

    test("awaits array of promises", _pipe_([
        [promise(42), promise(43)],
        expectToEqual([42, 43]),
    ]));

    test("works on stack", _pipe_([
        42,
        1,
        add,
        expectToBe(43),
    ]));


    test("the functions are being called", async () => {
        await expect(_pipe_([
            () => {
                throw "Error";
            },
        ])()).rejects.toBe("Error");
    });

    test("copy & paste", _pipe_([
        42,
        _copy_,
        43,
        _paste_,
        expectToBe(42),
    ]));
});

describe("compose_ function", () => {

    test("composes functions", _pipe_([
        promise(42),
        _compose_([fillIntoTemplate, promise("The answer is {}.")]),
        expectToBe("The answer is 42."),
    ]));

});