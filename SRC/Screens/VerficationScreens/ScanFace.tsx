import {Image, ImageBackground, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Camera, useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import CameraScreen from './CameraScreen';

const ScanFace = () => {
  const navigation = useNavigation();
  const device = useCameraDevice('front');
  const {hasPermission} = useCameraPermission();
  const [imageSource, setImageSource] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(false);
  const camera = useRef(null);

  const onScanFace = async () => {
    const req = await requestCameraPermission();
    console.log(req);
    if (req) {
      setShowCamera(true);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      console.log('granted', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermission(true);
        return true;
        console.log('You can use the camera');
      } else {
        setCameraPermission(false);
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Text style={styles.text1}>Setup Face ID</Text>
        <Text style={styles.text2}>You can use face authentication to login into Tradebase</Text>
        <ImageBackground source={require('../../Resources/Images/cameraframe.png')} resizeMode="contain" style={styles.image}>
          {!showCamera ? (
            imageSource === null ? (
              <View style={styles.imagecircle}>
                <Image source={require('../../Resources/Images/scanner1.png')} resizeMode="contain" style={styles.image2} />
              </View>
            ) : (
              <Image source={{uri: `file://'${imageSource}`}} resizeMode="contain" style={styles.image3} />
            )
          ) : (
            <CameraScreen imageSource={imageSource} setImageSource={setImageSource} setShowCamera={setShowCamera} />
          )}
        </ImageBackground>
      </View>
      {!showCamera && (
        <CustomButton
          title={'Scan my face'}
          onPress={() => {
            onScanFace();
          }}
          style={{bottom: responsiveHeight(3), position: 'absolute'}}
        />
      )}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    width: responsiveWidth(28),
    height: responsiveHeight(18),
  },
  imagecircle: {
    width: responsiveHeight(20),
    height: responsiveHeight(20),
    borderRadius: responsiveHeight(20) / 2,
    backgroundColor: colors.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image3: {
    width: responsiveWidth(75),
    height: responsiveHeight(37),
    borderRadius: 45,
  },
});
