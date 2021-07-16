import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import iconsStyle from '../../css/buttons/iconsStyle';

/**
 * 아이콘즈 컴포넌트
 * @author 주민지
 */

const iconsShape = {
    defaultSquare : iconsStyle.icons_squareDefaultView,
    defaultCircle : iconsStyle.icons_circleDefaultView,
    baseSquare : iconsStyle.icons_squareBaseView,
    baseCircle : iconsStyle.icons_circleBaseView,
}

const iconsText = {
    defaultText : iconsStyle.icons_defaultText,
    baseText : iconsStyle.icons_baseText,
}

export default function Icons({style, text}) {
    console.log(style);

    return(
        <View style={iconsStyle.icons_container}>  
            <TouchableOpacity 
                style = {[iconsShape[style]]}>
                    <Text style = {iconsText[text]}>+</Text>
                </TouchableOpacity>
        </View> 
    )
}