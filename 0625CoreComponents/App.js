import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{ 
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 100, // 텍스트 상자의 높이
          borderColor: 'gray', //테두리 색깔
          borderWidth: 3 //테두리 너비
        }}
        defaultValue="hi" // 텍스트 상자에 표시 될 기본 값
      />
    </ScrollView>
  );
}

export default App;

//저장을 누르면 바로바로 앱에 내가 쓴 코드를 반영할 수 있다.
