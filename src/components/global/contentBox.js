import React from 'react';
import {View, Text} from 'react-native';

const ContentBox = props => (
  <View
    style={{
      marginBottom: props.marginBottom,
      marginRight: props.marginRight,
      backgroundColor: '#33333D',
      aspectRatio: 1,
      width: props.width,
    }}>
    <Text />
  </View>
);

export default ContentBox;
