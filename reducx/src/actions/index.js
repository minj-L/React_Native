//여러개의 액션을 하나의 객체로 묶어 컴포넌트 파일에서 쉽게 사용할 수 있도록 해준다.
import * as countAction from './countAction';

const ActionCreators = Object.assign({},
    countAction
);

export default ActionCreators;