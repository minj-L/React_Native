import React from 'react';
import { Pressable } from 'react-native';
import buttonsStyle from '../../css/buttons/buttonsStyle';

/**
 * 버튼즈 컴포넌트
 * @author 주민지
 */

export default function Buttons() {
    const [pressButton, setPressButton] = useState(0);

    if(fontColor){
        fontStyle = {...fontStyle,color : fontColor};
    }

    if(backgroundColor){
        buttonsStyle = {...buttonsStyle, backgroundColor};
    }

    if(pressButton === num){
        buttonsStyle
    }

    return(
        <Pressable>
            
        </Pressable>
    )
}