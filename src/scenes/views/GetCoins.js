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
          height: 120,
          width: '100%',
        }}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          horizontal>
          {coinOffers.map((obj, index) => (
            <OfferBox offer={obj} width={110} key={index} />
          ))}
        </ScrollView>
        <View
          style={{
            height: 100,
            width: 130,
            position: 'absolute',
            right: 0,
            top: 10,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(0,0,0,0)', 'rgba(51,51,61,1)']}
            style={styles.linearGradient}
          />
        </View>
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
