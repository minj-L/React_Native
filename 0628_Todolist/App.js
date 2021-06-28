//이 App스크립트 자체가 하나의 컴포넌트 이다.
import React, {useState} from 'react'; 
//React라는 component를 사용하겠다.
//{useState}는 훅, 함수형 컴포넌트에서도 컴포넌트의 상탯값을 관리 할 수 있다.
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'; 
//'react-native에서 {}의 컴포넌트를 가져와 사용하겠다.
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

//todos : {id: Number, textValue: string, checked: boolean} 의 속성값을 가진다.

//const는 함수형 컴포넌트 클래스형 보다 간결하게 기술 할 수 있다.
const App = () => {
  const [todos, setTodos] = useState([]);//useState훅은 배열에 두 개의 값을 넣어 반환한다.
  //todo는 할 일 목록의 현재 상태, setTodo는 todo를 업데이트 해주는 함수이다. 

  const addTodo = text => { /*addTodo는 사용자가 입력한 텍스트를 인자로 받아
    새로운 todo 객체를 생성한다. 사용자가 입력한 텍스트는 textValue 속성으로 들어간다.*/
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  }; //이 함수는 속성값(props)을 이용해 TodoInsert로 전달된다.

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

//StyleSheet에 설정한 앱의 styles 속성
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
