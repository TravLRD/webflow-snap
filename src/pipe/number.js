export const assertValidNumber = (any) => {
    if (typeof any !== "number") {
        throw Error(`Assertion failed: expected number, got ${typeof any}.`);
    }

    if (isNaN(any)) {
        throw Error(`Assertion failed: expected number, got NaN.`);
    }

    return any;
}



export const isLt = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) < assertValidNumber(b);
}

export const isLte = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) <= assertValidNumber(b);
}

export const isGt = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) > assertValidNumber(b);
}

export const isGte = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) >= assertValidNumber(b);
}

export const isLessThan = isLt;
export const isGreaterThan = isGt;
export const isAtMost = isLte;
export const isAtLeast = isGte;



export const add = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) + assertValidNumber(b);
}

export const substract = (/** @type number */ b) => (/** @type number */ a) => {
    return assertValidNumber(a) - assertValidNumber(b);
}


