import React from 'react';
import {View, Image} from 'react-native';
import sizingStyle from '../../css/avatars/sizingStyle';

/**
 * 사이징 컴포넌트
 * @author 주민지
 */

export default function Sizing({size}) {
    return(
        <View style={sizingStyle.sizing_container}>
            <View style={[sizingStyle.sizing_megaSmall]}>
            </View>
        </View>
    )
}

Sizing.defaultProps = {
    size : '',
}