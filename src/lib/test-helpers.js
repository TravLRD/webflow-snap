import { expect } from 'vitest';

export const expectToBe = (expectedValue) => (value) => {
    expect(value).toBe(expectedValue);
    return value;
}

export const expectToEqual = (expectedValue) => (value) => {
    expect(value).toEqual(expectedValue);
    return value;
}

export const createPromise = (value) => () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), 0);
    });
}

export const promise = (value) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), 0);
    });
}