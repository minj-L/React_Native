import types from './types';

export function countUp(num) {
    return {
        type: types.COUNT_UP, //type은 증가 혹은 감소할 값을 전달한다.
        payload: num //증가 혹은 감소할 값을 전달한다.
    };
}

export function countDown(num) {
    return {
        type: types.COUNT_DOWN,
        payload: num
    };
}