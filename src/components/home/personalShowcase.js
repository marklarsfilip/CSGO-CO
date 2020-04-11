import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
const showcaseItemsArray = [
  {
    name: 'MEGA CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '390',
    rarity: 'yellow',
  },
  {
    name: 'COOL CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '240',
    rarity: 'green',
  },
  {
    name: 'SHITTY CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '210',
    rarity: 'gray',
  },
  {
    name: 'BAD CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '150',
    rarity: 'white',
  },
];

//Components
import ItemBox from '../global/itemBox';

const PersonalShowcase = ({navigation}) => (
  <View style={{marginBottom: 10}}>
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
        width: '100%',
      }}>
      {showcaseItemsArray.map((obj, index) => (
        <ItemBox
          item={obj}
          width={'31%'}
          marginBottom={15}
          borderColor={obj.rarity}
          key={index}
        />
      ))}
    </View>
  </View>
);

export default PersonalShowcase;
