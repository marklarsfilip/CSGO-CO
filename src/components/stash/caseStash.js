import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const caseStash = exampleStorage.caseStash;

//Components
import CaseBox from '../global/caseBox';

const CaseStash = ({navigation}) => (
  <View style={{backgroundColor: '#33333D'}}>
    <View
      style={{
        paddingTop: 24,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#484851',
        height: '100%',
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
  </View>
);

export default CaseStash;
