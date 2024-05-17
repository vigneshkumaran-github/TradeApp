import {Button, Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice, useCameraFormat, useCameraPermission} from 'react-native-vision-camera';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import { showToastGreen } from '../../HelperFunctions/Helper';

const CameraScreen = props => {
  const device = useCameraDevice('front');
  const format = useCameraFormat(device, [{photoResolution: {width: 420, height: 720}}]);
  const navigation = useNavigation();

  const [cameraPermission, setCameraPermission] = useState(false);
  const camera = useRef(null);

  const savePhoto = async photo => {
    await CameraRoll.save(`file://${photo.path}`, {
      type: 'photo',
    })
      .then(val => {
        console.log(val, 'saved');
        showToastGreen('Photo Successfully Saved')
      })
      .catch(err => {
        console.log(err);
      });
  };

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      await savePhoto(photo);
      // props?.setImageSource(photo.path);
      props?.setShowCamera(false);
      console.log(photo.path);
      navigation.navigate('ScanFingerprint');
    }
  };

  useEffect(() => {
    const timoeout = setTimeout(() => {
      capturePhoto();
      // props?.setShowCamera(false);
      // navigation.navigate('ScanFingerprint')
    }, 4000);
    return () => clearTimeout(timoeout);
  }, []);

  //   if (!hasPermission) return <PermissionsPage />
  //   if (device == null) return <NoCameraDeviceError />

  return (
    <View style={{borderRadius: 35, overflow: 'hidden'}}>
      {device && <Camera orientation="portrait" ref={camera} format={format} style={styles.camera} photo={true} device={device} isActive={true} />}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    width: responsiveWidth(75),
    height: responsiveHeight(37),
    borderRadius: 45,
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(15),
  },
});
