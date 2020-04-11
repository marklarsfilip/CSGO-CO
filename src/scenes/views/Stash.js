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
        marginTop: 20,
        flex: 1,
        backgroundColor: '#33333D',
      }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: main.colors.white,
          inactiveTintColor: '#999',
          labelStyle: {fontSize: 15},
          style: {
            elevation: 0,
            marginLeft: 15,
            backgroundColor: '#33333D',
          },
          tabStyle: {
            backgroundColor: '#33333D',
            shadowOpacity: 0,
            marginBottom: 3,
            width: 100,
          },
          indicatorStyle: {
            backgroundColor: main.colors.secondary,
            height: 3,
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
