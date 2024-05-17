import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {SigninSchema, SignupSchema} from './FormicSchema';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import AuthHeader from './Components/AuthHeader';
import {SvgXml} from 'react-native-svg';
import {eyesvg, eyesvg2} from '../../Resources/Svg/AuthIcons';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import CustomInput from '../../CustomComponents/CustomInput';
import {showToastRed} from '../../HelperFunctions/Helper';

interface MyFormValues {
  fullname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const initialValues: MyFormValues = {fullname: '', email: '', password: ''};
  const [viewPass, setViewPass] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [submit, setSubmit] = useState(false);
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={val => {
        if (toggleCheckBox) {
          navigation.navigate('SecureAccount');
        } else {
          showToastRed('Please accept our Terms of Service');
        }
      }}
      validationSchema={SignupSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={styles.container}>
          {/* Back Btn */}
          <CustomBackBtn />

          {/*Header Section */}
          <AuthHeader text1={'Getting Started'} text2={'Create an account to continue!'} />

          {/* Input Fields */}
          <View style={{marginTop: responsiveHeight(3), width: responsiveWidth(90), alignSelf: 'center'}}>
            <CustomInput
              inputMode={'text'}
              placeholder={'FullName'}
              value={values.fullname}
              onChangeText={handleChange('fullname')}
              touched={touched?.fullname}
              error={errors?.fullname}
              submit={submit}
              onFocus={() => {
                setFieldTouched('fullname');
              }}
              onBlur={() => {
                setFieldTouched('fullname');
              }}
            />

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

            <CustomInput
              inputMode={'text'}
              placeholder={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              touched={touched?.password}
              error={errors?.password}
              submit={submit}
              onFocus={() => {
                setFieldTouched('password');
              }}
              onBlur={() => {
                setFieldTouched('password');
              }}
              inputStyle={{width: responsiveScreenWidth(70)}}
              secureTextEntry={viewPass}
              password={true}
              forgot={false}
              setViewPass={setViewPass}
            />

            {/* Terms and conditions */}
            <View style={styles.termsContainer}>
              <CheckBox disabled={false} value={toggleCheckBox} tintColors={{true: colors.primarycolor, false: colors.gray}} onValueChange={newValue => setToggleCheckBox(newValue)} />
              <Text style={styles.termstext}>I agree to the </Text>
              <TouchableOpacity>
                <Text style={[styles.termstext, {color: colors.primarycolor}]}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.termstext}>{' and '}</Text>
              <TouchableOpacity>
                <Text style={[styles.termstext, {color: colors.primarycolor}]}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* BottomView */}
          <View style={styles.bottomContainer}>
            <CustomButton
              title={'Start'}
              onPress={() => {
                setSubmit(true);
                handleSubmit();
              }}
            />

            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: responsiveHeight(2)}}>
              <Text style={styles.graytext}>Dont’s have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signin');
                }}>
                <Text style={styles.bluetext}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    backgroundColor: colors.backgroundcolor,
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
  graytext: {
    color: colors.textGray,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(12),
  },
  bluetext: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(13),
  },
  termsContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  termstext: {
    color: colors.textGray,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
  },
  redtext: {
    color: colors.red,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    marginStart: responsiveWidth(2),
  },
});
