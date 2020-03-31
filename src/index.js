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

//global views
import TopInformation from './scenes/globals/TopBar';

//scripts
import generateItem from './scripts/generateItem';

let item = {};

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#222" barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <TopInformation />
    </SafeAreaView>
    <Button title="PRess me" onPress={() => this.getTempUser} />
    <View style={{flex: 1}}>
      <Tabs />
      <Text>{JSON.stringify(item)}</Text>
      <Button
        title="Generate!"
        onPress={() => (item.generated = generateItem())}
      />
    </View>
  </SafeAreaView>
);

console.log(generateItem());

export default App;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'nowrap',
    height: 30,
    backgroundColor: '#333',
    paddingHorizontal: 10,
  },
});
