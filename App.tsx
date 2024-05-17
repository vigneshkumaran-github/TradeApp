import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen } from './SRC/Navigation/StackNav';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
      <Toast />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
