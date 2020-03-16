import React from 'react';
import { View, Text, Alert } from 'react-native';
import { CaseNormal } from '_atoms';

const Home = () => (
  <View>
    <Text>Home screen</Text>
    <CaseNormal title="Open normal CASE" onPress={() => Alert.alert('Opening case...')} />
  </View>
);

export default Home;
