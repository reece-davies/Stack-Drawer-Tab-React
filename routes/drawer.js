// Following this guide: https://www.youtube.com/watch?v=CQp65DQnUs0
// But taking inspiration from this guide: https://www.youtube.com/watch?v=EaNCi8o8H0A&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=24
// https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da

import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack.js';
import Blank from '../screens/blank.js';
import TabNavigator from './tab.js';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="About" component={AboutStack} />
    <Drawer.Screen name="Blank" component={Blank} />
  </Drawer.Navigator>
);

export default () => (
    <DrawerNavigation />
);

/* ***** From the documentation *****
export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
*/

/* ***** Before implementing TabNavigation *****
const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="About" component={AboutStack} />
    <Drawer.Screen name="Blank" component={Blank} />
  </Drawer.Navigator>
);
*/