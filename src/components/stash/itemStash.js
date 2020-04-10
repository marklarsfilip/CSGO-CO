import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
const StashedItemsArray = [
  {
    name: 'MEGA SPORTSBAG',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    score: '390',
  },
  {
    name: 'COOL SPORTSBAG',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
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
];

//Components
import ItemBox from '../global/itemBox';

const ItemStash = ({navigation}) => (
  <View style={{marginBottom: 10}}>
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text
        style={{
          backgroundColor: '#484851',
          color: '#fff',
          fontSize: 16,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        ITEMS
      </Text>
    </View>
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#484851',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}>
      {StashedItemsArray.map((obj, index) => (
        <ItemBox
          item={obj}
          width={'23%'}
          marginBottom={15}
          marginRight={'2%'}
          key={index}
        />
      ))}
    </View>
  </View>
);

export default ItemStash;
