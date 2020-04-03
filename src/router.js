import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

//Scenes
import {Home, Stash, Market, GetCoins} from '_scenes';

// Styles
import main from './styles/index';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: main.colors.white,
          labelStyle: {fontSize: 15},
          style: {backgroundColor: main.colors.primaryVariant},
          indicatorStyle: {backgroundColor: main.colors.secondary, height: 3},
          animationEnabled: false,
          swipeEnabled: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Stash" component={Stash} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Coins" component={GetCoins} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
