import { describe, expect, test } from "vitest";
import { expectToBe, expectToEqual } from "../lib/test-helpers";
import { getFirstElement, getLastElement, getNthElement, reverse, _map_ } from "./array";
import { increaseBy } from "./increaseBy";
import { _pipe_ } from "./pipe";



const mutate = (array) => {
    array.push(0);
}



describe("reverse function", () => {

    test("reverses 3 element array", _pipe_([
        [42, 43, 44],
        reverse,
        expectToEqual([44, 43, 42]),
    ]));

    test("creates new immutable array", () => {
        const array = [42, 43, 44];
        const newArray = reverse(array);
        expect(array).toEqual([42, 43, 44]);
        expect(() => mutate(newArray)).toThrow();
    })

});



describe("_map_ function", () => {

    test("maps 3 element array", _pipe_([
        [42, 43, 44],
        _map_([increaseBy(1)]),
        expectToEqual([43, 44, 45]),
    ]));

    test("creates new immutable array", () => {
        const array = [42, 43, 44];
        const newArray = _map_([increaseBy(1)])(array);
        expect(array).toEqual([42, 43, 44]);
        expect(() => mutate(newArray)).toThrow();
    });

});



test("getNthElement function", _pipe_([
    [42, 43, 44],
    getNthElement(1),
    expectToBe(43),
]));

test("getFirstElement function", _pipe_([
    [42, 43, 44],
    getFirstElement,
    expectToBe(42),
]));

test("getLastElement function", _pipe_([
    [42, 43, 44],
    getLastElement,
    expectToBe(44),
]));


