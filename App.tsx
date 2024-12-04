import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen, HomeStackScreen } from './SRC/Navigation/StackNav';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Store from './SRC/Redux/Store';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <AuthStackScreen />
      <Toast />
    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
