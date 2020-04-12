import React from 'react';
import {View, Text, Image, Icon} from 'react-native';

// Components
const OfferBox = props => {
  return (
    <View
      style={{
        backgroundColor: '#33333D',
        aspectRatio: 1,
        width: props.width,
        paddingVertical: 8,
        paddingHorizontal: 8,
      }}>
      <Image
        style={{flex: 1}}
        resizeMode="contain"
        source={{
          uri: props.offer.image,
        }}
      />
    </View>
  );
};

export default OfferBox;
