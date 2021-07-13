import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import roundedCircleStyle from '../../css/buttons/roundedCircleStyle';

/**
 * 라운디드서클 컴포넌트
 * @author 주민지
 */

export default function RoundedCircle() {
    return(
        <TouchableOpacity style={roundedCircleStyle.roundedCircle_container}>
            <View style={[roundedCircleStyle.roundedCircle_view]}>
            </View>
        </TouchableOpacity>
    )
}

RoundedCircle.defaultProps = {

}