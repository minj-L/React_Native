import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ButtonGroup } from './ButtonGroup';


const App = () => {

  const printButtonLable = (item) => {
    console.log(item)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ButtonGroup
          buttons={['One', 'Two', 'Three']}
          doSomethingAfterClick={printButtonLable}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding: 10,
  }
})

export default App;