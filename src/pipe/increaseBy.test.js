import { test } from "vitest";
import { expectToBe } from "../lib/test-helpers";
import { increaseBy } from "./increaseBy";
import { _pipe_ } from "./pipe";

test("increaseBy", _pipe_([
    42,
    increaseBy(1),
    expectToBe(43),
]))