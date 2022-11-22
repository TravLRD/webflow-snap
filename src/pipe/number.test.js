import { describe, test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { isLt } from "./number";
import { _pipe_ } from "./pipe";

describe("isLt function", () => {

    test("less", _pipe_([
        42,
        isLt(43),
        expectToBe(true),
    ]));

    test("equal", _pipe_([
        42,
        isLt(42), // for this to work, the next test also has to pass
        expectToBe(false),
    ]));

    test("greater", _pipe_([
        42,
        isLt(41), // for this to work, the next test also has to pass
        expectToBe(false),
    ]));

});