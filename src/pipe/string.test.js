import { describe, test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { _pipe_ } from "./pipe";
import { fillIntoTemplate } from "./string";

describe("fillIntoTemplate function", () => {

    test("empty template", _pipe_([
        42,
        fillIntoTemplate("There is no answer."),
        expectToBe("There is no answer."),
    ]));

    test("string replacement template", _pipe_([
        "42",
        fillIntoTemplate("The answer is {}."),
        expectToBe("The answer is 42."),
    ]));

    test("number replacement template", _pipe_([
        42,
        fillIntoTemplate("The answer is {}."),
        expectToBe("The answer is 42."),
    ]));

    test("json replacement template", _pipe_([
        [42, 43],
        fillIntoTemplate("The answer is {}."),
        expectToBe("The answer is [42,43]."),
    ]));

});


// describe("captureMatches function", () => {

//     test("returns matches with position", _pipe_([

//     ]));

// });