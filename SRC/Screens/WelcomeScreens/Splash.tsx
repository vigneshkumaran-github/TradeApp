import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../Constants/DesignConstants';

const Splash = () => {
  return (
    <View>
      <Text style={styles.text1}>SplashScreen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text1: {
    color: colors.primarycolor,
  },
});
