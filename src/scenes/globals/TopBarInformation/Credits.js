import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {Icon} from 'react-native-elements';

let credits = 0;
// create a function that saves your data asyncronously
const _storeData = async () => {
  try {
    await AsyncStorage.setItem('credits', '1337');
  } catch (error) {
    // Error saving data
  }
};

// fetch the data back asyncronously
const _retrieveData = async () => {
  try {
    credits = parseInt(await AsyncStorage.getItem('credits'), 10);
  } catch (error) {
    // Error retrieving data
  }
};

const Credits = () => (
  <View style={[{justifyContent: 'flex-start'}, styles.item]}>
    <Icon size={17} name="attach-money" type="font-awsome" color="#FFDF00" />
    <Text p style={[{marginLeft: 1}, styles.text]}>
      {credits}
    </Text>
  </View>
);

var test = _storeData();
var test2 = _retrieveData();

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
