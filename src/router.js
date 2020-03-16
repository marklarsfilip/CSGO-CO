import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Scenes
import { Home, Stash, Market, Settings } from '_scenes';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ Home } />
        <Tab.Screen name="Stash" component={ Stash } />
        <Tab.Screen name="Market" component={ Market } />
        <Tab.Screen name="Settings" component={ Settings } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
