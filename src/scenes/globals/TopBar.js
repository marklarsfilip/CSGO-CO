import React from 'react';
import {View, StyleSheet} from 'react-native';

import Credits from './TopBarInformation/Credits';
import Notifications from './TopBarInformation/Notifications';

const TopBar = () => (
  <View style={[{flexDirection: 'row'}, styles.item]}>
    <Credits />
    <Notifications />
  </View>
);

export default TopBar;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    fontSize: 13,
    paddingTop: 3,
  },
});
