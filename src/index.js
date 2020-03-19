import React from 'react';
import {
  View,
  SafeAreaView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

//router
import Tabs from './router';

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
    <StatusBar backgroundColor="#333" barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <View style={[{flexDirection: 'row'}, styles.item]}>
        <View style={[{backgroundColor: '#EE2C38'}, styles.item]}>
          <Text p style={styles.text}>
            credits
          </Text>
        </View>
        <View style={[{backgroundColor: '#Ab0672'}, styles.item]}>
          <Text p style={styles.text}>
            info
          </Text>
        </View>
        <View style={[{backgroundColor: '#542165'}, styles.item]}>
          <Text p style={styles.text}>
            sessiontime
          </Text>
        </View>
      </View>
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
    height: 25,
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
    marginTop: 48,
  },
  item: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});
