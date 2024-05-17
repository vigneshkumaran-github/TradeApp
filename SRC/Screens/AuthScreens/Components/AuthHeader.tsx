import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';

const AuthHeader = ({text1, text2}) => {
  return (
    <View>
      <Image
        source={require('../../../Resources/Images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(50),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(4),
  },
  textContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    marginTop: responsiveHeight(3.5),
    fontSize: RFValue(20),
  },
  text2:{
    color: colors.textGray,
    fontFamily: fontfamily.fontRegular,
    marginTop: responsiveHeight(2),
    fontSize: RFValue(12),
  }
});
