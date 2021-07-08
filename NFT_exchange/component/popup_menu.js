import * as React from 'react';
import { Alert, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
 
import {NavigationContainer} from '@react-navigation/native';
 
import {createStackNavigator} from '@react-navigation/stack';
 
import 'react-native-gesture-handler';
 
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
 
const CustomMenu = (props) => {
  let _menu = null;
  return (
    <View style={props.menustyle}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <TouchableOpacity onPress={() => _menu.show()}>
              <Image
                source={{
                  uri:
                    'https://reactnativecode.com/wp-content/uploads/2020/12/menu_icon.png',
                }}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }>
        <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>
          Menu Item 1
        </MenuItem>
 
        <MenuItem disabled>Disabled Menu Item 2</MenuItem>
 
        <MenuDivider />
 
        <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>
          Menu Item 3
        </MenuItem>
 
      </Menu>
    </View>
  );
};
 
const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
 
      <View style={{flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center'}}>
 
          <Text style={{ fontSize: 24}}> Home Page </Text>
 
      </View>
 
    </SafeAreaView>
  );
};
 
const Stack = createStackNavigator();
 
function popup_menu() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({route, navigation}) => ({
          headerRight: () => (
            <CustomMenu
              menutext="Menu"
              menustyle={{marginRight: 14}}
              textStyle={{color: 'white'}}
              navigation={navigation}
              route={route}
              isIcon={true}
            />
          ),
        })}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home Page',
            headerStyle: {
              backgroundColor: '#00C853',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default popup_menu;