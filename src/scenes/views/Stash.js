import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Styles
import main from '_styles';

// Components
import ItemStash from '../../components/stash/itemStash';
import CaseStash from '../../components/stash/caseStash';
const Tab = createMaterialTopTabNavigator();

const Stash = () => (
  <View style={main.scenes.home.container}>
    <View
      style={{
        backgroundColor: '#33333D',
        flex: 1,
        marginTop: 20,
      }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: main.colors.white,
          inactiveTintColor: '#999',
          activeBackgroundColor: '#484851',
          inactiveBackgroundColor: '#33333D',
          labelStyle: {fontSize: 15},
          style: {
            marginLeft: 15,
            backgroundColor: '#33333D',
          },
          tabStyle: {
            backgroundColor: '#484851',
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
            marginLeft: 10,
            marginBottom: 3,
            width: 100,
          },
          indicatorStyle: {
            backgroundColor: main.colors.secondary,
            height: 3,
            marginLeft: 10,
          },
          animationEnabled: false,
          swipeEnabled: false,
        }}>
        <Tab.Screen name="Items" component={ItemStash} />
        <Tab.Screen name="Cases" component={CaseStash} />
      </Tab.Navigator>
    </View>
  </View>
);

export default Stash;
