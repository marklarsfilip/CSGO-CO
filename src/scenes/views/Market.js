import React from 'react';
import {View, Button, Text} from 'react-native';

// Styles
import main from '_styles';

import market from '../../data/exports/market';

//Components
import CaseBox from '../../components/global/caseBox';
import ItemBox from '../../components/global/itemBox';

const Market = props => (
  <View style={main.scenes.home.container}>
    <View style={{marginBottom: 15, marginTop: 15}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        BEST CASE OFFERS
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
        {market.marketCases.map((obj, index) => (
          <CaseBox
            case={obj}
            width={'31%'}
            marginRight={0}
            marginBottom={12}
            paddingTop={3}
            key={index}
          />
        ))}
      </View>
    </View>
    <View style={{marginBottom: 10}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        BEST ITEM OFFERS
      </Text>
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
        {market.marketItems.map((obj, index) => (
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
  </View>
);

export default Market;
