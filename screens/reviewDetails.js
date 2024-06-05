import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import globalStyles from '../styles/global.js';

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details Screen</Text>
      <View style={globalStyles.buttonStyle}>
        <Button
          title="Go back to Home Screen"
          onPress={pressHandler}
          color='red'
        />
      </View>
    </View>
  );
}
