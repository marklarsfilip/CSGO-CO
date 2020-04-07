import React from 'react';
import {View, Text} from 'react-native';

// Components
import ContentBox from '../global/contentBox';

const HotCases = () => (
  <View style={{marginBottom: 30}}>
    <Text
      style={{
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 14,
        paddingVertical: 10,
      }}>
      HOT CASES
    </Text>
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: '#484851',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ContentBox width={'35%'} marginRight={13} />
      <ContentBox width={'35%'} marginRight={13} />
      <ContentBox width={'35%'} marginRight={13} />
      <ContentBox width={'35%'} marginRight={13} />
    </View>
  </View>
);

export default HotCases;
