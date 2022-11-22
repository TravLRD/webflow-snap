import { _pipe_ } from "./pipe";

export const _if_ = (transforms, branches) => async (value) => {
    if (await _pipe_(transforms)(value)) {
        return await branches.then?.(value) ?? value;
    } else {
        return await branches.else?.(value) ?? value;
    }
};

export const _when_ = _if_;

export const _ifNot_ = (transforms, branches) => async (value) => {
    if (!await _pipe_(transforms)(value)) {
        return await branches.then?.(value) ?? value;
    } else {
        return await branches.else?.(value) ?? value;
    }
};

export const _unless_ = _ifNot_;

export const is = (a) => (b) => {
    return Object.is(a, b);
};

export const isNot = (a) => (b) => {
    return a !== b;
};

export const equals = (a) => (b) => {
    return a == b;
};

export const not = (a) => {
    return !a;
};

export const and = (a) => (b) => {
    return a && b;
};

export const or = (a) => (b) => {
    return a || b;
};

export const isTrue = (a) => {
    return a === true;
};

export const isFalse = (a) => {
    return a === false;
};

export const isNotTrue = isFalse;