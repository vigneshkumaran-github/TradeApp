import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen } from './SRC/Navigation/StackNav';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
