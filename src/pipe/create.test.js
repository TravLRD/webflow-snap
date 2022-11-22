import { test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { _pipe_ } from "./pipe";

test("create", _pipe_([
    42,
    expectToBe(42),
]));





