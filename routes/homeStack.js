// Following guide at: https://www.youtube.com/watch?v=bHfYEbyRwW8
// Plus the documentation at: https://reactnavigation.org/docs/getting-started
// and: https://reactnavigation.org/docs/stack-navigator/

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home.js';
import ReviewDetails from '../screens/reviewDetails.js';
import DrawerNavigation from './drawer.js';

const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
);

export default () => (
  // NavigationContainer was used before, but now implemented in drawer navigator file / app.js
    <HomeStackScreen />
);