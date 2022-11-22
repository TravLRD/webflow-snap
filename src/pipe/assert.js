export const assert = (expected) => (given) => {
    if (expected !== given) {
        throw "Assertion failed.";
    }

    return given;
}


export const assertNot = (expected) => (given) => {
    if (expected === given) {
        throw "Assertion failed.";
    }

    return given;
}



export const ifUndefThen = (defaultValue) => (value) => {
    return value ?? defaultValue;
}