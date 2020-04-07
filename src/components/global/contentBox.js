import React from 'react';
import {View,Text} from 'react-native';


const ContentBox = (props) => (
  <View style={{marginBottom: props.marginBottom, marginRight: props.marginRight, backgroundColor: '#33333D', aspectRatio: 1, height: props.height}}>
    <Text></Text>
  </View>
);

export default ContentBox;
