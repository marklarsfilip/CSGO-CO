import React from 'react';
import {View, Button} from 'react-native';

// Styles
import main from '_styles';

//Components
import HotCases from '../../components/home/hotCases';
import PersonalShowcase from '../../components/home/personalShowcase';
import ButtonSmall from '../../components/global/ButtonSmall';

const Home = props => (
  <View style={main.scenes.home.container}>
    <View>
      <HotCases />
    </View>
    <View>
      <PersonalShowcase />
      <View style={{alignSelf: 'flex-end', width: 160}}>
        <ButtonSmall
          onPress={() => props.navigation.navigate('Stash')}
          title="UPDATE SHOWCASE"
          buttonStyle={{ backgroundColor: '#1EB980', marginRight: 20, paddingRight: 3, paddingLeft: 3, paddingTop: 8, paddingBottom: 8 }}
          buttonTextStyle={{ textAlign: 'center', color: 'white' }}
        />
      </View>
    </View>
  </View>
);

export default Home;
