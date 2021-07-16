import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import cardHeaderStyle from '../../css/cards/cardHeaderStyle';

/**
 * 카드헤더 컴포넌트
 * @author 주민지
 */

export default function CardHeader({title, content, onPress}) {
    console.log(title)
    return(
        <View style={cardHeaderStyle.cardHeader_colum}>
            <View style={cardHeaderStyle.cardHeader_topContainer}>
                <Text style={cardHeaderStyle.cardHeader_titleText}>{title}</Text>
            </View>
            <View style={cardHeaderStyle.cardHeader_bottomContainer}>
                <Text style={cardHeaderStyle.cardHeader_contentText}>{content}</Text>
            </View>
        </View>
    )
}

CardHeader.defaultProps = {
    title : String,
    content : String,
}