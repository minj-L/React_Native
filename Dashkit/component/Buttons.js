import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import buttonsStyle from '../css/buttonsStyle';

/**
 * 사이징 컴포넌트
 * @author 주민지
 */

const buttonType = {

}

export default function Buttons({button}) {
    return(
        <TouchableOpacity style={buttonsStyle.buttons_container}>
            <View style={[buttonType[button]]}>
            </View>
        </TouchableOpacity>
    )
}