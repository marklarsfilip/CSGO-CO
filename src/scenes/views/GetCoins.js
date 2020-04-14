import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Styles
import main from '_styles';

//Components
import OfferBox from '../../components/global/specialOfferBox';
import coinOffers from '../../data/exports/coinOffers';

const GetCoins = props => (
  <View style={main.scenes.home.container}>
    <View style={{marginBottom: 30}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          paddingHorizontal: 14,
          paddingVertical: 10,
        }}>
        BEST OFFERS
      </Text>
      <View
        style={{
          paddingVertical: 10,
          paddingLeft: 14,
          paddingRight: 0,
          backgroundColor: '#484851',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}>
        {coinOffers.map((obj, index) => (
          <OfferBox offer={obj} width={'45%'} key={index} />
        ))}
        <View
          style={{
            height: 100,
            width: 130,
            position: 'absolute',
            right: 0,
            top: 10,
          }}
        />
      </View>
    </View>
    <View style={{marginBottom: 30}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          paddingHorizontal: 14,
          paddingVertical: 10,
        }}>
        FREE COINS
      </Text>
      <View
        style={{
          paddingVertical: 10,
          paddingLeft: 14,
          paddingRight: 0,
          backgroundColor: '#484851',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            paddingHorizontal: 14,
            paddingVertical: 10,
          }}>
          MINI GAMES AND SOCIAL MEDIA PROMOTIONS
        </Text>
      </View>
    </View>
  </View>
);

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default GetCoins;
