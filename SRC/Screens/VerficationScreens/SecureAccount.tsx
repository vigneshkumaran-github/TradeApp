import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SecureAccount = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Image source={require('../../Resources/Images/secure.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>Secure your account</Text>
        <Text style={styles.text2}>One way we keep your account secure is with 2-step verification, which requires your phone number.</Text>
      </View>

      <View style={styles.bottomcontainer}>
        <CustomButton title={'Continue'} onPress={()=>{navigation.navigate('MobileVerification')}} />
      </View>
    </View>
  );
};

export default SecureAccount;

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
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(17),
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    marginTop: responsiveHeight(3.5),
    fontSize: RFValue(20),
  },
  text2: {
    color: colors.textGray,
    fontFamily: fontfamily.fontMedium,
    marginTop: responsiveHeight(2.5),
    fontSize: RFValue(12),
    textAlign: 'center',
    width: responsiveWidth(70),
    lineHeight: responsiveHeight(3),
  },
  bottomcontainer:{
    position:'absolute',
    bottom:responsiveHeight(3),
    alignSelf:'center'
  }
});
