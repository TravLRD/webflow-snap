import { getLastElement, reverse } from "./array";

export const _pipe_ = (/** any[] */ oldStack) => async (value) => {
    const newStack = [value];
    let clipboard = undefined;

    for (const element of oldStack) {

        newStack.push(await toSinglePromise(element));

        while (true) {
            if (typeof newStack[newStack.length - 1] !== "function") {
                break;
            }

            const transform = newStack.pop();

            if (transform === _paste_) {
                newStack.push(clipboard);
                continue;
            }

            if (typeof newStack[newStack.length - 1] === "function") {
                break;
            }

            if (transform === _copy_) {
                clipboard = getLastElement(newStack);
                continue;
            }

            const value = newStack.pop();

            const result = await toSinglePromise(transform(value));
            newStack.push(result);
        }
    }

    return newStack.pop();
};



export const _compose_ = (transforms) => _pipe_(reverse(transforms));



export const _copy_ = (any) => any;

export const _paste_ = (any) => any;



const toSinglePromise = (any) => {
    if (Array.isArray(any)) {
        return Promise.all(any);
    }

    return any;
}