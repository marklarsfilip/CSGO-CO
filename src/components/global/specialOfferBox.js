import React from 'react';
import {View, Text, Image, Icon} from 'react-native';

import ButtonSmall from '../../components/global/ButtonSmall';

// Components
const OfferBox = props => {
  const image = props.offer.image;
  return (
    <View
      style={{
        backgroundColor: '#33333D',
        aspectRatio: 1,
        width: props.width,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: props.marginBottom || 15,
        marginRight: props.marginRight || '5%',
      }}>
      <View style={{flex: 0.1}}>
        <Text
          style={{
            position: 'absolute',
            color: '#1EB980',
            top: 2,
            left: 2,
          }}>
          {props.offer.save !== '0%' ? 'SAVE ' + props.offer.save : ''}
        </Text>
      </View>
      <Image
        style={{flex: 0.7, width: null, height: null}}
        resizeMode={'contain'}
        source={image}
      />
      <ButtonSmall
        onPress={() => props.navigation.navigate('Stash')}
        title={'BUY for ' + props.offer.price}
        buttonStyle={{
          flex: 0.2,
          backgroundColor: '#1EB980',
          paddingRight: 6,
          paddingLeft: 6,
          paddingTop: 10,
          paddingBottom: 8,
        }}
        buttonTextStyle={{textAlign: 'center', color: 'white'}}
      />
    </View>
  );
};

export default OfferBox;
