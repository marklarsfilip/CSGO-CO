import React from 'react';
import {View,Text} from 'react-native';

//Load stored items

//Components
import ContentBox from '../global/contentBox';

const PersonalShowcase = () => (
  <View>
    <Text style={{color: '#fff', fontSize: 16, paddingHorizontal: 14, paddingVertical: 10}}>PERSONAL SHOWCASE</Text>
    <View style={{paddingVertical: 10,paddingHorizontal: 14,backgroundColor: '#484851',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
      <ContentBox height={120} marginBottom={13} />
      <ContentBox height={120} marginBottom={13} />
      <ContentBox height={120} marginBottom={13} />
      <ContentBox height={120} marginBottom={13} />
      <ContentBox height={120} marginBottom={13} />
      <ContentBox height={120} marginBottom={13} />
    </View>
  </View>
);

export default PersonalShowcase;
