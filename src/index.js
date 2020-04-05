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
import ItemGraphic from './components/global/item';

//scripts
import generateItem from './scripts/generateItem';

// Styles
import main from '_styles';

let item = generateItem();

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: main.colors.primary}}>
    <StatusBar backgroundColor="#222" barStyle="light-content" />
    <SafeAreaView style={main.components.topBar.styles.container}>
      <TopInformation />
    </SafeAreaView>
    <View style={{flex: 1}}>
      <Tabs />
      <ItemGraphic item={item} />
      <Text style={{color: '#fff'}}>{JSON.stringify(item)}</Text>
      <Button
        title="Generate!"
        onPress={() => (item.generated = generateItem())}
      />
    </View>
  </SafeAreaView>
);

console.log(item);
export default App;
