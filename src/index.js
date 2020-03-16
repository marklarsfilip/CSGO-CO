import React from 'react';
import { View, SafeAreaView } from 'react-native';

// Atoms
import { ButtonSmall } from '_atoms';

//Scenes

const App = () => (
  <SafeAreaView>
    <View>
      <ButtonSmall name="Testar knapp" />
    </View>
  </SafeAreaView>
);

export default App;
