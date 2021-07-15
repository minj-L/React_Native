import React from 'react'
import { View, Text } from 'react-native';
import CardTitle from './cards/CardTitle';

export default function Screen() {
    console.log('Screen');
    return (
        <View style={{flex:1,padding:10}}>
            <CardTitle title={"Card title"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis."}/>
        </View>
    )
}
