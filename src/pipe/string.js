import { ifUndefThen } from "./assert";
import { _pipe_ } from "./pipe";

export const format = (template) => (value) => {
    const valueString = typeof value === "object" ? JSON.stringify(value) : value;
    return template.replace("{}", valueString);
};

export const interpolate = format;

export const substitute = format;

export const fillIntoTemplate = format;


// export const captureMatches = (regex) => _pipe_([
//     ifUndefThen(""),
//     (string) => Array.from(string.matchAll(regex)),
//     map([getElement(1)]),
// ]);
