import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Components
import CaseBox from '../global/caseBox';

const hotCasesArray = [
  {
    name: 'BAG CASE',
    image: 'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
  },
  {
    name: 'GOLD CASE',
    image: 'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
  },
  {
    name: 'SILVER CASE',
    image: 'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
  },
  {
    name: 'BRONZE CASE',
    image: 'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    price: '',
    discount: '',
  }
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
          paddingHorizontal: 14,
          backgroundColor: '#484851',
          height: 120,
          width: '100%'
        }}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
            horizontal
          >
            {hotCasesArray.map((l) => (
              <CaseBox
                case={l}
                width={120}
                marginRight={13}
              />
            ))}
          </ScrollView>
      </View>
  </View>
);

export default HotCases;
