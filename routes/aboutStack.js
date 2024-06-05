// Taking inspiration from guide at: https://www.youtube.com/watch?v=EaNCi8o8H0A&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=24

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about.js';

const Stack = createStackNavigator();

const AboutStackScreen = () => (
  <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
);

export default () => (
    <AboutStackScreen />
);