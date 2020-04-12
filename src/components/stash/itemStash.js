import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const itemStash = exampleStorage.itemStash;

//Components
import ItemBox from '../global/itemBox';
import ButtonSmall from '../../components/global/ButtonSmall';

const ItemStash = ({navigation}) => (
  <View style={{marginBottom: 10, height: '100%', backgroundColor: '#33333D'}}>
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
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: '#fff', marginTop: 15, marginLeft: 20}}>
        10 / 40
      </Text>
      <View style={{alignSelf: 'flex-end', width: 160, marginTop: 15}}>
        <ButtonSmall
          onPress={() => navigation.navigate('Market')}
          title="UPGRADE STASH"
          buttonStyle={{
            backgroundColor: '#1EB980',
            marginRight: 20,
            paddingRight: 3,
            paddingLeft: 3,
            paddingTop: 8,
            paddingBottom: 8,
          }}
          buttonTextStyle={{textAlign: 'center', color: 'white'}}
        />
      </View>
    </View>
  </View>
);

export default ItemStash;
