import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const itemStash = exampleStorage.itemStash;

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
      {itemStash.map((obj, index) => (
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
