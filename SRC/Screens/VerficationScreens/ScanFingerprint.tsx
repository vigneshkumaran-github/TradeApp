import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const ScanFingerprint = () => {
  const navigation = useNavigation();

  const key =
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4iV2yUL6x4T4i2qfz7z56122JGMntgT6U+0xpqqkY8PiFSwLkSWoe39Ix1TEze1D5qB7/tX2th2wBT5yEIVXVH3+jFo4BKCHOp1NbQOP5z4fo7eD8CGZ8HOnnAwJfuj5qFESk2u7W1BP84Yk9jNDVQluFKUpQA/EQr2EqMe6ENfi2GN8MehTvZt4IhUbZaX81iTy/kftQyBAfET2vBRX2KkTykSpxo6apRk//gm7PtHEh2qwYpss1QfGAXSVqBiWXozGsZ/yPj2/2+hGVrA2YMZl8mlneA6ERTfKFWKMQl0MsWalLEWbRPVxBA4SUlGwH1vGbu1sjBNs5fh9lwTtNQIDAQAB';

  const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

  const onTouch = async () => {
    const {biometryType} = await rnBiometrics.isSensorAvailable();

    
    if (biometryType === BiometryTypes.Biometrics) {
      const {success} = await rnBiometrics.simplePrompt({
        promptMessage: 'Place Your Finger',
      });

      if (success) {
        await rnBiometrics.createKeys().then(key => {
          navigation.navigate('PinSetup');
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Text style={styles.text1}>Setup Face ID</Text>
        <Text style={styles.text2}>You can use face authentication to login into Tradebase</Text>
        <TouchableOpacity
          onPress={() => {
            onTouch();
          }}>
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
