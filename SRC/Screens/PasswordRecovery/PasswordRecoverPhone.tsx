import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {PhoneNumberSchema} from '../AuthScreens/FormicSchema';
import CustomBackBtn from '../../CustomComponents/CustomBackBtn';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {SvgXml} from 'react-native-svg';
import {dropdownsvg} from '../../Resources/Svg/AuthIcons';
import CountryModal from '../VerficationScreens/Components/CountryModal';
import CustomButton from '../../CustomComponents/CustomButton';
import {RFValue} from 'react-native-responsive-fontsize';
import {countryCode} from '../../Constants/DataConstants';

interface MyFormValues {
  phonenumber: string;
}

const PasswordRecoverPhone = () => {
  const [countryModal, setCountryModal] = useState(false);
  const [countrySelected, setCountrySelected] = useState(countryCode[0]);
  const initialValues: MyFormValues = {phonenumber: ''};
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={val => {
        navigation.navigate('PasswordRecoverOtp');
      }}
      validationSchema={PhoneNumberSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={styles.container}>
          <CustomBackBtn />

          <View style={styles.subContainer}>
            <Text style={styles.text1}>Password Recovery</Text>
            <Text style={styles.text2}>Enter your Phone number to recover your password</Text>
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
                <Text style={styles.floatlabel}>Phone Number</Text>
              </View>
            )}
            <CountryModal countryModal={countryModal} setCountryModal={setCountryModal} setCountrySelected={setCountrySelected} />
          </View>
          {errors.phonenumber && <Text style={styles.redtext}>{errors.phonenumber + ' '}!</Text>}

          <CustomButton
            title={'Send OTP Code'}
            onPress={() => {
              handleSubmit();
            }}
            style={{marginTop: responsiveHeight(5)}}
          />
        </View>
      )}
    </Formik>
  );
};

export default PasswordRecoverPhone;

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
  redtext: {
    color: colors.red,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    marginStart: responsiveWidth(7),
  },
});
