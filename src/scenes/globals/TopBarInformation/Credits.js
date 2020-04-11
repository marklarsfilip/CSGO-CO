import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

//Load stored items
import exampleStorage from '../../../data/exports/exampleUserStorage';

const credits = exampleStorage.credits;

const Credits = () => (
  <View style={[{justifyContent: 'flex-start'}, styles.item]}>
    <Icon size={17} name="attach-money" type="font-awsome" color="#FFDF00" />
    <Text p style={[{marginLeft: 1}, styles.text]}>
      {credits}
    </Text>
  </View>
);

export default Credits;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    fontSize: 13,
    paddingTop: 3,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 0,
    fontSize: 14,
  },
});
