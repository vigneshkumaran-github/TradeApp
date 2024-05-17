import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ScanFingerprint = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Text style={styles.text1}>Setup Face ID</Text>
        <Text style={styles.text2}>You can use face authentication to login into Tradebase</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('PinSetup')}}>
          <Image source={require('../../Resources/Images/fingerprint.png')} resizeMode="contain" style={styles.image} />
        </TouchableOpacity>
        <Text style={[styles.text2, {fontFamily: fontfamily.fontLight, marginTop: 0}]}>Please lift and rest your finger</Text>
      </View>
     
    </View>
  );
};

export default ScanFingerprint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    marginTop: responsiveHeight(4.5),
    fontSize: RFValue(20),
    textAlign: 'center',
  },
  text2: {
    color: colors.textGray,
    fontFamily: fontfamily.fontMedium,
    marginTop: responsiveHeight(1.5),
    fontSize: RFValue(12),
    width: responsiveWidth(60),
    lineHeight: responsiveHeight(3),
    textAlign: 'center',
  },
  image: {
    width: responsiveWidth(45),
    height: responsiveHeight(28),
    marginTop: responsiveHeight(7),
  },
});
