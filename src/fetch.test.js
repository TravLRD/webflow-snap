import { describe, expect, test } from "vitest";
import { returnHello } from "./fetch";

describe("describe", () => {
  test("test", ()=> {
    expect(returnHello()).toBe("Hello");
  });
});