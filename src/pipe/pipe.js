import { reverse } from "./array";

export const _pipe_ = (/** any[] */ oldStack) => async (value) => {
    const newStack = [value];

    for (const element of oldStack) {

        newStack.push(await toSinglePromise(element));

        while (true) {
            if (typeof newStack[newStack.length - 1] !== "function") {
                break;
            }

            const transform = newStack.pop();

            if (typeof newStack[newStack.length - 1] === "function") {
                break;
            }

            const value = newStack.pop();

            const result = await toSinglePromise(transform(value));
            newStack.push(result);
        }
    }

    return newStack.pop();
};



export const _compose_ = (transforms) => _pipe_(reverse(transforms));



const toSinglePromise = (any) => {
    if (Array.isArray(any)) {
        return Promise.all(any);
    }

    return any;
}