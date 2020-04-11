import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import CaseBox from '../global/caseBox';

const hotCasesArray = [
  {
    name: 'BAG CASE',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
    availableItems: [
      {
        name: 'MEGA CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '390',
      },
      {
        name: 'COOL CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '240',
      },
      {
        name: 'SHITTY CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '210',
      },
      {
        name: 'BAD CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '150',
      },
    ],
  },
  {
    name: 'GOLD CASE',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
    availableItems: [
      {
        name: 'MEGA CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '390',
      },
      {
        name: 'COOL CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '240',
      },
      {
        name: 'SHITTY CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '210',
      },
      {
        name: 'BAD CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '150',
      },
    ],
  },
  {
    name: 'SILVER CASE',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
    availableItems: [
      {
        name: 'MEGA CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '390',
      },
      {
        name: 'COOL CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '240',
      },
      {
        name: 'SHITTY CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '210',
      },
      {
        name: 'BAD CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '150',
      },
    ],
  },
  {
    name: 'BRONZE CASE',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
    availableItems: [
      {
        name: 'MEGA CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '390',
      },
      {
        name: 'COOL CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '240',
      },
      {
        name: 'SHITTY CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '210',
      },
      {
        name: 'BAD CROCS',
        image:
          'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
        score: '150',
      },
    ],
  },
];

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
        {hotCasesArray.map((obj, index) => (
          <CaseBox
            case={obj}
            width={120}
            marginRight={13}
            paddingTop={4}
            key={index}
          />
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
);

export default HotCases;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
