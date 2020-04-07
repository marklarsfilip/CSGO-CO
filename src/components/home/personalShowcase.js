import React from 'react';
import {View, Text} from 'react-native';

//Load stored items

//Components
import ContentBox from '../global/contentBox';

const PersonalShowcase = () => (
  <View style={{marginBottom: 30}}>
    <Text
      style={{
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}>
      PERSONAL SHOWCASE
    </Text>
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#484851',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ContentBox width={'31%'} marginBottom={13} />
      <ContentBox width={'31%'} marginBottom={13} />
      <ContentBox width={'31%'} marginBottom={13} />
      <ContentBox width={'31%'} marginBottom={13} />
      <ContentBox width={'31%'} marginBottom={13} />
      <ContentBox width={'31%'} marginBottom={13} />
    </View>
  </View>
);

export default PersonalShowcase;
