import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Notifications = () => (
  <View style={[{justifyContent: 'flex-end'}, styles.item]}>
    <Icon size={17} name="message" type="font-awsome" color="#FFDF00" />
    <Text p style={[{marginLeft: 6}, styles.text]}>
      0
    </Text>
  </View>
);

export default Notifications;

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
