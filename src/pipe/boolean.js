import { _pipe_ } from "./pipe";

export const if_ = (transforms, branches) => async (value) => {
    if (await _pipe_(transforms)(value)) {
        return await branches.then?.(value) ?? value;
    } else {
        return await branches.else?.(value) ?? value;
    }
};

export const when_ = if_;

export const unless_ = (transforms, branches) => async (value) => {
    if (!await _pipe_(transforms)(value)) {
        return await branches.then?.(value) ?? value;
    } else {
        return await branches.else?.(value) ?? value;
    }
};

export const is = (a) => (b) => {
    return a === b;
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