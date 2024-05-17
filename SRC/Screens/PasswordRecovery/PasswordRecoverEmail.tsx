import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {EmailSchema} from '../AuthScreens/FormicSchema';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomInput from '../../CustomComponents/CustomInput';

interface MyFormValues {
  email: string;
}

const PasswordRecoverEmail = () => {
  const initialValues: MyFormValues = {email: ''};
  const navigation = useNavigation();
  const [submit, setSubmit] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={val => {
        // navigation.navigate('PasswordRecoverOtp');
      }}
      validationSchema={EmailSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={styles.container}>
          <CustomBackBtn />

          <View style={styles.subContainer}>
            <Text style={styles.text1}>Password Recovery</Text>
            <Text style={styles.text2}>Enter your email to recover your password</Text>
          </View>

          {/* <View
            style={[
              styles.inputContainer,
              {
                borderColor: touched.email ? colors.primarycolor : colors.boxGray,
              },
            ]}>
            <TextInput
              inputMode={'text'}
              placeholderTextColor={colors.textGray}
              placeholder={'Email Address'}
              numberOfLines={1}
              value={values.email}
              onChangeText={handleChange('email')}
              editable
              onFocus={() => {
                setFieldTouched('email');
              }}
              onBlur={() => {
                setFieldTouched('email');
              }}
              style={styles.input}
            />
            {touched.email && (
              <View style={styles.label}>
                <Text style={styles.pinktext}>Email Address</Text>
              </View>
            )}
          </View>
          {errors.email && <Text style={styles.redtext}>{errors.email + ' '}!</Text>} */}

          <View style={{marginTop: responsiveHeight(3), width: responsiveWidth(90), alignSelf: 'center'}}>
            <CustomInput
              inputMode={'text'}
              placeholder={'Email Address'}
              value={values.email}
              onChangeText={handleChange('email')}
              touched={touched?.email}
              error={errors?.email}
              submit={submit}
              onFocus={() => {
                setFieldTouched('email');
              }}
              onBlur={() => {
                setFieldTouched('email');
              }}
            />
          </View>

          <CustomButton
            title={'Send OTP Code'}
            onPress={() => {
              setSubmit(true);
              handleSubmit();
            }}
            style={{marginTop: responsiveHeight(5)}}
          />
        </View>
      )}
    </Formik>
  );
};

export default PasswordRecoverEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  inputContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: responsiveHeight(2.5),
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: responsiveWidth(4),
  },
  input: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
  },
  label: {
    position: 'absolute',
    top: -responsiveHeight(1.5),
    start: responsiveWidth(6),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(2),
    borderRadius: 10,
  },
  pinktext: {
    color: colors.pink,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
  },
  pinktext2: {
    color: colors.pink,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    alignSelf: 'center',
  },
  redtext: {
    color: colors.red,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    marginStart: responsiveWidth(7),
  },
});
