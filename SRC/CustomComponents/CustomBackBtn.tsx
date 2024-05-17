import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {backbtn} from '../Resources/Svg/AuthIcons';
import {colors} from '../Constants/DesignConstants';
import {useNavigation} from '@react-navigation/native';

const CustomBackBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgXml
          xml={backbtn}
          width={responsiveWidth(8)}
          height={responsiveWidth(8)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomBackBtn;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(13) / 2,
    borderWidth: 0.7,
    borderColor: colors.primarycolor,
  },
});
