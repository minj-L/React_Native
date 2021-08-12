//리듀서에서는 이 요청을 처리할 수 있도록 코드를 작성해야 합니다.
import types from '../actions/types';

const count = 0;
export default (state = count, action) => {
    switch (action.type) {
        case types.COUNT_UP: //이전의 상태를 전달받음
            return state + action.payload; //이전 상태에서 바꿀 액션을 전달받음
        case types.COUNT_DOWN:
            return state - action.payload;
        default:
            return state;
    }
};