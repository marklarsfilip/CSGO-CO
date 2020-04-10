import React from 'react';
import {View, Text} from 'react-native';

// Styles
import main from '_styles';

// Components
import ItemStash from '../../components/stash/itemStash';

const Stash = () => (
  <View style={main.scenes.home.container}>
    <View>
      <ItemStash />
    </View>
  </View>
);

export default Stash;
