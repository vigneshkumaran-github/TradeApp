import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {dropdownsvg} from '../../Resources/Svg/AuthIcons';
import CountryModal from './Components/CountryModal';
import {countryCode} from '../../Constants/DataConstants';
import {Formik} from 'formik';
import {PhoneNumberSchema} from '../AuthScreens/FormicSchema';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../CustomComponents/CustomButton';

interface MyFormValues {
  phonenumber: string;
}

const MobileVerification = () => {
  const [countryModal, setCountryModal] = useState(false);
  const [countrySelected, setCountrySelected] = useState(countryCode[0]);
  const initialValues: MyFormValues = {phonenumber: ''};
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={val => {
        navigation.navigate('OtpVerify');
      }}
      validationSchema={PhoneNumberSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={styles.container}>
          <CustomBackBtn />

          <View style={styles.subContainer}>
            <Text style={styles.text1}>Set up 2-step verification</Text>
            <Text style={styles.text2}>Enter your phone number so we can text you an authentication code</Text>
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.rowView}
              onPress={() => {
                setCountryModal(!countryModal);
              }}>
              <Image source={require('../../Resources/Images/country.png')} style={styles.image} resizeMode="contain" />
              <SvgXml xml={dropdownsvg} width={responsiveWidth(6)} height={responsiveHeight(3)} />
              <Text style={styles.grayText}>{countrySelected.code}</Text>
            </TouchableOpacity>
            <TextInput
              inputMode={'numeric'}
              maxLength={10}
              placeholderTextColor={colors.textGray}
              placeholder={'Phone Number'}
              numberOfLines={1}
              value={values.phonenumber}
              onChangeText={handleChange('phonenumber')}
              editable
              onFocus={() => {
                setFieldTouched('phonenumber');
              }}
              onBlur={() => {
                setFieldTouched('phonenumber');
              }}
              style={styles.input}
            />
            {touched.phonenumber && (
              <View style={styles.label}>
                <Text style={styles.floatlabel}>Email Address</Text>
              </View>
            )}
            <CountryModal countryModal={countryModal} setCountryModal={setCountryModal} setCountrySelected={setCountrySelected} />
          </View>
          {errors.phonenumber && <Text style={styles.redtext}>{errors.phonenumber + ' '}!</Text>}

          <View style={styles.bottomcontainer}>
            <CustomButton
              title={'Continue'}
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default MobileVerification;

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
    width: responsiveWidth(70),
    lineHeight: responsiveHeight(3),
  },
  inputContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: responsiveHeight(5),
    // justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: responsiveWidth(3),
    borderColor: colors.primarycolor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    width: responsiveWidth(58),
    marginStart: responsiveWidth(1),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(23),
    justifyContent: 'space-between',
  },
  grayText: {
    color: colors.textGray,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    marginStart: responsiveWidth(2),
  },
  image: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
  label: {
    position: 'absolute',
    top: -responsiveHeight(1.5),
    start: responsiveWidth(6),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(2),
    borderRadius: 10,
  },
  floatlabel: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
  },
  bottomcontainer: {
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
