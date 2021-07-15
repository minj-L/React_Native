import React from 'react'
import { View, Text } from 'react-native';
import CardTitle from './cards/CardTitle';

export default function TestPage() {
    console.log('Screen');
    return (
        <View style={{flex:1,padding:10}}>
            <Text>TestPage</Text>
        </View>
    )
}
