import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//Load stored items
const StashedCasesArray = [
  {
    name: 'GOLD',
    image:
      'https://vignette.wikia.nocookie.net/piratepower/images/3/32/Icon_Gold_Chest.png/revision/latest/scale-to-width-down/340?cb=20160313142816',
  },
  {
    name: 'GOLD',
    image:
      'https://vignette.wikia.nocookie.net/piratepower/images/3/32/Icon_Gold_Chest.png/revision/latest/scale-to-width-down/340?cb=20160313142816',
  },
  {
    name: 'GOLD',
    image:
      'https://vignette.wikia.nocookie.net/piratepower/images/3/32/Icon_Gold_Chest.png/revision/latest/scale-to-width-down/340?cb=20160313142816',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
  {
    name: 'ANCIENT',
    image: 'https://i.dlpng.com/static/png/756977_thumb.png',
  },
  {
    name: 'MYSTERY',
    image:
      'https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/TreasureRoll_Mystery.png/256px-TreasureRoll_Mystery.png?version=29627397fc3b65b4a11c079866661c50',
  },
];

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
        {StashedCasesArray.map((obj, index) => (
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
