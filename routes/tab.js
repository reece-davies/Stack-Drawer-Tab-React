// Following this guide: https://www.youtube.com/watch?v=CQp65DQnUs0
// But taking inspiration from this guide: https://www.youtube.com/watch?v=EaNCi8o8H0A&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=24
// https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da

import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from './homeStack';
import AboutStack from './aboutStack.js';
import Blank from '../screens/blank.js';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="About" component={AboutStack} />
  </Tab.Navigator>
);

export default () => (
    <BottomTabNavigator />
);
