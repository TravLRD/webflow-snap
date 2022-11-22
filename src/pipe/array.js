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



export const getNthElement = (index) => (array) => {
    if (index < 0) {
        index += array.length;
    }

    return array[index];
}

export const getFirstElement = (array) => {
    return array[0];
}

export const getLastElement = (array) => {
    return array[array.length - 1];
}

