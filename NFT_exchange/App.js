import React, { Component } from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Timer_main_detail from './component/Timer_main_detail';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.elem}>
            <View style={styles.user_profile}/>
            <Text style={styles.user_name}>hyunji</Text>
        </View>
        <Text style={styles.nft_name}>NATURE</Text>
        <View style={styles.elem}>
          <View style={styles.cost_colum}>
            <Text style={styles.coust_time_text}>현재 경매가</Text>
            <Text style={styles.coust_time_bold_text}>0.1 ETH</Text>
          </View>
          <View style={styles.cost_colum}>
            <Text style={styles.coust_time_text}>남은 시간</Text>
            <Timer_main_detail />
          </View>
        </View>
        <View style={styles.elem}>
            <Text style={styles.coust_time_text}>10.000원</Text>
        </View>
        <View style={styles.elem}>
            <Button
                title="제안하기"
                onPress={() => navigation.navigate('Details')}/>
        </View>
      </View>
    );
}


function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
  container: {
    flex:1,
  },
  
  elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  user_profile: { //검정색 원의 프로필
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginLeft: 20,
  },
  user_name: {
    fontSize: 20,
    paddingLeft: 20,
  },

  nft_name: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },

  cost_colum: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 10,
  },

  coust_time_text: {
    fontSize: 15,
    marginLeft: 20,
  },

  coust_time_bold_text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  button: {
    marginLeft: 20,
    borderRadius: 40,
    width: 140,
    height: 50,
    backgroundColor:'#000000',
  },

  button_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 30
  }
});

export default App;