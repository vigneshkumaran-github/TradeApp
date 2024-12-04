import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

const OtpVerify = () => {
  const navigation = useNavigation();
  const data = [1, 2, 3, 4];
  const [focused, setFocused] = useState(0);
  const inputRefs = useRef([]);
  const [values, setValues] = useState([]);

  const handlechange = (val, index) => {
    // console.log(val);
    let newArr = [...values];
    newArr[index] = val;
    setValues(newArr);
    console.log(newArr, 'NEW ARRAY');
    if (val && index < data.length - 1) {
      // Move focus to the next input field
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <View style={styles.container}>
      <CustomBackBtn />

      <View style={styles.subContainer}>
        <Text style={styles.text1}>Enter authentication code</Text>
        <Text style={styles.text2}>
          Enter 4-digit code we just texted to your phone number, <Text style={{color: colors.pink}}>+84 999 999 999</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {data?.map((item, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={[styles.input, {backgroundColor: values[index]?.length > 0 ? colors.primarycolor : colors.white}]}
            maxLength={1}
            onFocus={() => {}}
            inputMode="numeric"
            value={values[index]}
            onKeyPress={({nativeEvent: {key}}) => {
              if (key === 'Backspace' && index > 0) {
                inputRefs.current[index - 1].focus();
              }
            }}
            onChangeText={val => {
              console.log(val);
              handlechange(val, index);
            }}
          />
        ))}
      </View>

      <CustomButton title={'Continue'} onPress={() => {navigation.navigate('ScanFace')}} />
      <CustomButton
        title={'Resend code'}
        titleColor={{color: colors.pink}}
        onPress={() => {}}
        style={{backgroundColor: colors.white, marginTop: responsiveHeight(3), borderWidth: 1, borderColor: colors.primarycolor}}
      />
    </View>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    width: responsiveWidth(85),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: responsiveHeight(5),
  },
  input: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    borderWidth: 1,
    borderColor: colors.primarycolor,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.skybluelight,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(20),
  },
  subContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    marginTop: responsiveHeight(4.5),
    fontSize: RFValue(20),
  },
  text2: {
    color: colors.textGray,
    fontFamily: fontfamily.fontMedium,
    marginTop: responsiveHeight(1.5),
    fontSize: RFValue(12),
    width: responsiveWidth(85),
    lineHeight: responsiveHeight(3),
  },
  pinktext: {
    color: colors.pink,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
  },
});
