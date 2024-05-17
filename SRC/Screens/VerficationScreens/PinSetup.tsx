import {BackHandler, Image, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import NumberPad from '../../CustomComponents/NumberPad';

const PinSetup = () => {
  const data = [1, 2, 3, 4];
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const [val, setVal] = useState(0);

  const onNumberPress = () => {
    if (val === 3) {
      setVal(0);
      navigation.navigate('PasswordRecoverPhone');
    } else {
      setVal(val + 1);
    }
  };

  const onDeletePress = () => {
    if (val !== 0) {
      setVal(val - 1);
    }
  };

  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.imageContainer}>
        <Image source={require('../../Resources/Images/lock.png')} resizeMode="contain" style={styles.image} />
      </View>

      <Text style={styles.text1}>Setup PIN</Text>
      <Text style={styles.text2}>Enter your PIN number</Text>

      <View style={styles.circleContainer}>
        {data?.map((item, index) => (
          <View key={index} style={[styles.circle, {backgroundColor: val - 1 >= index ? colors.primarycolor : colors.primarycolorlight}]} />
        ))}
      </View>

      <TextInput
        onChangeText={val => {
          setValue(val);
          if (val.length === 4) {
            navigation.navigate('PasswordRecoverPhone');
          }
        }}
        value={value}
        // focusable
        blurOnSubmit={false}
        // autoFocus
        inputMode="numeric"
        style={{opacity: 0, position: 'absolute', width: 0, height: 0}}
      />
      <NumberPad onPressHandler={onNumberPress} onDeletePress={onDeletePress} />
    </View>
  );
};

export default PinSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: responsiveHeight(18),
    height: responsiveHeight(18),
    backgroundColor: colors.buttongray,
    borderRadius: responsiveHeight(18) / 2,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  image: {
    width: responsiveHeight(14),
    height: responsiveHeight(14),
    bottom: responsiveHeight(1),
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
    alignSelf: 'center',
  },
  circle: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    backgroundColor: colors.primarycolorlight,
    borderRadius: responsiveWidth(7) / 2,
  },
  circleContainer: {
    width: responsiveWidth(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
});
