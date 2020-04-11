import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
const StashedItemsArray = [
  {
    name: 'MEGA SPORTSBAG',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    score: '390',
    rarity: 'yellow',
  },
  {
    name: 'COOL SPORTSBAG',
    image:
      'https://cdn2.iconfinder.com/data/icons/sports-and-games-3-3/48/147-512.png',
    score: '240',
    rarity: 'orange',
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
    rarity: 'blue',
  },
  {
    name: 'MEGA CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '390',
    rarity: 'green',
  },
  {
    name: 'COOL CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '240',
    rarity: 'purple',
  },
  {
    name: 'SHITTY CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '210',
    rarity: 'white',
  },
  {
    name: 'BAD CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '150',
    rarity: 'green',
  },
  {
    name: 'MEGA CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '390',
    rarity: 'pink',
  },
  {
    name: 'COOL CROCS',
    image:
      'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/crocs-512.png',
    score: '240',
    rarity: 'yellow',
  },
];

//Components
import ItemBox from '../global/itemBox';

const ItemStash = ({navigation}) => (
  <View style={{marginBottom: 10}}>
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
        height: '100%',
      }}>
      {StashedItemsArray.map((obj, index) => (
        <ItemBox
          item={obj}
          width={'23%'}
          marginBottom={15}
          marginRight={'2%'}
          borderColor={obj.rarity}
          key={index}
        />
      ))}
    </View>
  </View>
);

export default ItemStash;
