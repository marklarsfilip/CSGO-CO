import React from 'react';
import {View, SafeAreaView, Button, StatusBar, StyleSheet} from 'react-native';

//router
import Tabs from './router';

//global views
import TopInformation from './scenes/globals/TopBar';

//Temp user
import TempUser from './lib/user';

function getTempUser() {
  return fetch('/lib/user')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
}

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#222" barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <TopInformation />
    </SafeAreaView>
    <Button title="PRess me" onPress={() => this.getTempUser} />
    <View style={{flex: 1}}>
      <Tabs />
    </View>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'nowrap',
    height: 30,
    backgroundColor: '#333',
    paddingHorizontal: 10,
  },
});
