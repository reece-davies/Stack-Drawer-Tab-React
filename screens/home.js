import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import globalStyles from '../styles/global.js';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <View style={globalStyles.buttonStyle}>
        <Button
          title="Go to Review Details Screen"
          onPress={() => navigation.push("ReviewDetails")}
        />
      </View>
    </View>
  );
}

