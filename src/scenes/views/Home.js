import React from 'react';
import {View,Text} from 'react-native';

// Styles
import main from '_styles';

//Components
import HotCases from '../../components/home/hotCases';
import PersonalShowcase from '../../components/home/personalShowcase';

const Home = () => (
  <View style={main.scenes.home.container}>
    <View>
      <HotCases />
    </View>
    <View>
      <PersonalShowcase />
    </View>
  </View>
);

export default Home;
