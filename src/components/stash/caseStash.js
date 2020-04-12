import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const caseStash = exampleStorage.caseStash;

//Components
import CaseBox from '../global/caseBox';
import ButtonSmall from '../../components/global/ButtonSmall';

const CaseStash = ({navigation}) => (
  <View style={{backgroundColor: '#33333D', height: '100%'}}>
    <View
      style={{
        paddingTop: 24,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#484851',
        width: '100%',
      }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {caseStash.map((obj, index) => (
          <CaseBox
            case={obj}
            width={'31%'}
            marginRight={0}
            marginBottom={12}
            paddingTop={3}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
    <View style={{alignSelf: 'flex-end', width: 160, marginTop: 15}}>
      <ButtonSmall
        onPress={() => navigation.navigate('MARKET')}
        title="GET CASES"
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
);

export default CaseStash;
