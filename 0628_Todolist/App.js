//이 App스크립트 자체가 하나의 컴포넌트 이다.
import React from 'react'; //React라는 component를 사용하겠다.
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native'; 
//'react-native에서 {}의 컴포넌트를 가져와 사용하겠다.

//const는 함수형 컴포넌트 클래스형 보다 간결하게 기술 할 수 있다.
const App = () => {
  return ( //return 안에는 html요소를 작성한다.
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Add an item!" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

/*App이라는 component를 내보낸다는 의미이다.
다른 컴포넌트에서 App을 불러와서 사용할 수 있다.
ex. import App form'./App';*/
export default App;
