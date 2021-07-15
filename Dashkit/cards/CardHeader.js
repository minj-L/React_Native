import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import cardTitleStyle from '../css/cards/cardTitleStyle';

/**
 * 카드헤더 컴포넌트
 * @author 주민지
 */

export default function CardHeader({title, content, onPress}) {
    console.log(onPress)
    return(
        <View style={cardTitleStyle.cardTitle_container}>
            <View style={cardTitleStyle.cardTitle_colum}>
                <Text style={cardTitleStyle.cardTitle_titleText}>{title}</Text>
                <Text style={cardTitleStyle.cardTitle_contentText}>{content}</Text>
                <TouchableOpacity
                    onPress={onPress}
                    style={cardTitleStyle.cardTitle_button}>
                        <Text style={cardTitleStyle.cardTitle_buttonText}>Go somewhere</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

CardTitle.defaultProps = {
    title : String,
    content : String,
    onPress: () => null,
}