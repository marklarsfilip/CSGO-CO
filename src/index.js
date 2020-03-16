import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';

//router
import Tabs from './router';

//Temp user
import TempUser from './lib/user';

function getTempUser() {
  return fetch('/lib/user')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <Button title="PRess me" onPress={() => this.getTempUser}/>
    <View style={{flex: 1}}>
      <Tabs />
    </View>
  </SafeAreaView>
);

export default App;
