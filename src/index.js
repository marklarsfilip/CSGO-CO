import React from 'react';
import { View, SafeAreaView } from 'react-native';

//router
import Tabs from './router';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1}}>
      <Tabs />
    </View>
  </SafeAreaView>
);

export default App;
