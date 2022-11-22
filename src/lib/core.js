import { _pipe_ } from "../pipe/pipe";

export const if_ = (predicateList, trueTransformList, falseTransformList = []) => (value) => {
    return value;
};



export const sideEffect = (transform) => async (value) => {
    await transform(value);
    return value;
}


export const tuple_ = (transforms) => (value) => transforms.map((transform) => transform(value));


export const throwError = (/** @type String */ errorMessage) => () => { throw new Error(errorMessage) };



/**
 * Name ideas: rejectUnless, acceptIf
 */
export const rejectUnless = (predicateList) => (value) => undefined;
 


export const array_ = Array.isArray;
export const object_ = (value) => typeof value === "object" && value !== null;
export const number_ = (value) => typeof value === "number";
export const string_ = (value) => typeof value === "string";
export const boolean_ = (value) => typeof value === "boolean";
export const undefined_ = (value) => typeof value === "undefined";

export const isArray = Array.isArray;
export const isObject = (value) => typeof value === "object" && value !== null;
export const isNumber = (value) => typeof value === "number";
export const isString = (value) => typeof value === "string";
export const isBoolean = (value) => typeof value === "boolean";
export const isUndefined = (value) => typeof value === "undefined";
export const isUndef = isUndefined;


export const value_ = (value) => () => value;
export const setValue = (value) => () => value;
export const replaceValueTo = value_;
export const replaceValueWith = value_;
export const replaceTo = value_;
export const replaceWith = value_;

export const getValue = (value) => value;



export const not_ = (predicateList) => _pipe_([
    ...predicateList,
    rejectUnless([boolean_]),
    (bool) => !bool,
]);

export const eq_ = (r) => (l) => l === r;

export const lt_ = (/** @type Number */ r) => if_([number_], [
    (l) => l < r,
]);

export const lte_ = (/** @type Number */ r) => if_([number_], [
    (l) => l <= r,
]);

export const gt_ = (/** @type Number */ r) => if_([number_], [
    (l) => l > r,
]);

export const gte_ = (/** @type Number */ r) => if_([number_], [
    (l) => l >= r,
]);
