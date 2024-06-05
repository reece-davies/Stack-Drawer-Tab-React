import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Logbox, Text, View } from 'react-native';

import globalStyles from './styles/global.js';

import Home from './screens/home.js';
import About from './screens/about.js';
import Blank from './screens/blank.js';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './routes/homeStack.js';
import DrawerNavigation from './routes/drawer.js';

export default function App() {
  return (
    //<Home /> // No navigation invlved (no stack navigation)
    //<HomeStack /> // Only using stack navigation (no drawer nor tabs)

    <NavigationContainer>
      <DrawerNavigation />
      <StatusBar style="default" />
    </NavigationContainer>
  );
}














/* *** Default starter code ***

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/