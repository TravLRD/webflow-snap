export const assertString = (any) => {
    if (typeof any !== "string") {
        throw Error(`Assertion failed: expected string, got ${typeof any}.`);
    }

    return any;
}

export const format = (/** @type string */ template) => (any) => {
    const valueString = typeof any === "object" ? JSON.stringify(any) : any;
    return assertString(template).replace("{}", valueString);
};

export const interpolate = format;

export const substitute = format;

export const fillIntoTemplate = format;


// export const captureMatches = (regex) => _pipe_([
//     ifUndefThen(""),
//     (string) => Array.from(string.matchAll(regex)),
//     map([getElement(1)]),
// ]);
