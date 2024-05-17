import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {SigninSchema} from './FormicSchema';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {responsiveHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import AuthHeader from './Components/AuthHeader';
import {SvgXml} from 'react-native-svg';
import {eyesvg, eyesvg2} from '../../Resources/Svg/AuthIcons';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../CustomComponents/CustomInput';

interface MyFormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const initialValues: MyFormValues = {email: '', password: ''};
  const [viewPass, setViewPass] = useState(true);
  const [submit, setSubmit] = useState(false);
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={val => {
        navigation.navigate('');
      }}
      validationSchema={SigninSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={styles.container}>
          <CustomBackBtn />
          <AuthHeader text1={'Let’s Sign You In'} text2={'Welcome back, you’ve been missed!'} />
          <View style={{marginTop: responsiveHeight(3), width: responsiveWidth(90), alignSelf: 'center'}}>
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
            {errors.email && submit && <Text style={styles.redtext}>{errors.email + ' '}!</Text>} */}

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
              touched={touched?.email}
              error={errors?.email}
              submit={submit}
              onFocus={() => {
                setFieldTouched('password');
              }}
              onBlur={() => {
                setFieldTouched('password');
              }}
              inputStyle={{width: responsiveScreenWidth(55)}}
              secureTextEntry={viewPass}
              password={true}
              forgot={true}
              setViewPass={setViewPass}
            />

            {/* <View
              style={[
                styles.inputContainer,
                {
                  borderColor: touched.password ? colors.primarycolor : colors.boxGray,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                inputMode={'text'}
                placeholderTextColor={colors.textGray}
                placeholder={'Password'}
                secureTextEntry={viewPass}
                numberOfLines={1}
                value={values.password}
                onChangeText={handleChange('password')}
                editable
                onFocus={() => {
                  setFieldTouched('password');
                }}
                onBlur={() => {
                  setFieldTouched('password');
                }}
                style={[styles.input, {width: responsiveScreenWidth(55)}]}
              />

              <TouchableOpacity>
                <Text style={styles.pinktext2}>Forgot ?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setViewPass(!viewPass);
                }}>
                <SvgXml xml={viewPass ? eyesvg : eyesvg2} width={responsiveHeight(4)} height={responsiveWidth(6)} />
              </TouchableOpacity>

              {touched.password && (
                <View style={styles.label}>
                  <Text style={styles.pinktext}>Password</Text>
                </View>
              )}
            </View>
            {errors.password && submit && <Text style={styles.redtext}>{errors.password + ' '}!</Text>} */}
          </View>

          <View style={styles.bottomContainer}>
            <CustomButton
              title={'Login'}
              onPress={() => {
                setSubmit(true);
                handleSubmit()
                // setFieldTouched('');
              }}
            />

            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: responsiveHeight(2)}}>
              <Text style={styles.graytext}>Dont’s have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <Text style={styles.bluetext}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Signin;

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
    color: colors.lightBlue,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(13),
  },
  redtext: {
    color: colors.red,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    marginStart: responsiveWidth(2),
  },
});
