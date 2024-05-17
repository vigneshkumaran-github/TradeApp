import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';

const CustomButton = ({style, title,onPress,titleColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={[styles.btntext,titleColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    backgroundColor: colors.primarycolor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
  },
  btntext: {
    color: colors.white,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(14),
  },
});
