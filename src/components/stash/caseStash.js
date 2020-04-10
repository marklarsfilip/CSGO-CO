import React from 'react';
import {View, Text} from 'react-native';

//Load stored items
const StashedCasesArray = [
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
import CaseBox from '../global/caseBox';

const CaseStash = ({navigation}) => (
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
      {StashedCasesArray.map((obj, index) => (
        <CaseBox
          case={obj}
          width={96}
          marginRight={13}
          marginBottom={13}
          key={index}
        />
      ))}
    </View>
  </View>
);

export default CaseStash;
