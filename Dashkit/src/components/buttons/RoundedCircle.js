import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
//import { Plus } from "react-native-feather";
import roundedCircleStyle from '../../css/buttons/roundedCircleStyle';

/**
 * 라운디드서클 컴포넌트
 * @author 주민지
 */

const sizes = {
    big : roundedCircleStyle.roundedCircle_big,
    midium : roundedCircleStyle.roundedCircle_midium,
    small : roundedCircleStyle.roundedCircle_small
};

export default function RoundedCircle({size}) {
    console.log(size);
    return(
        <TouchableOpacity style={roundedCircleStyle.roundedCircle_container}>
            <View style={[sizes[size]]}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    )
}