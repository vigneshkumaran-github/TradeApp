import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ScanFace = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Text style={styles.text1}>Setup Face ID</Text>
        <Text style={styles.text2}>You can use face authentication to login into Tradebase</Text>
        <Image source={require('../../Resources/Images/scanner.png')} resizeMode="contain" style={styles.image} />
      </View>
      <CustomButton
        title={'Scan my face'}
        onPress={() => {
          navigation.navigate('ScanFingerprint');
        }}
        style={{bottom: responsiveHeight(3), position: 'absolute'}}
      />
    </View>
  );
};

export default ScanFace;

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
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    marginTop: responsiveHeight(7),
  },
});
