import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const showcase = exampleStorage.showcase;

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
      {showcase.map((obj, index) => (
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
