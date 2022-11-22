import { _pipe_ } from "./pipe";

export const reverse = (/** any[] */ array) => {
    const reversedArray = [];
    for (let z = array.length - 1; z >= 0; z -= 1) {
        reversedArray.push(array[z]);
    }
    return Object.freeze(reversedArray);
}



export const _map_ = (stack) => (array) => {
    return Object.freeze(array.map(_pipe_(stack)));
}



export const getFirstElement = (value) => {
    return value[0];
}
