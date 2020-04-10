import React from 'react';
import {View, Button} from 'react-native';

// Styles
import main from '_styles';

//Components
import HotCases from '../../components/home/hotCases';
import PersonalShowcase from '../../components/home/personalShowcase';

const Home = props => (
  <View style={main.scenes.home.container}>
    <View>
      <HotCases />
    </View>
    <View>
      <PersonalShowcase />
      <View style={{alignSelf: 'flex-end', width: 160}}>
        <Button
          onPress={() => props.navigation.navigate('Stash')}
          title="UPDATE SHOWCASE"
          color="#1EB980"
        />
      </View>
    </View>
  </View>
);

export default Home;
