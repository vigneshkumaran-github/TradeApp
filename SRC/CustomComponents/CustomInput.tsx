import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {eyesvg, eyesvg2} from '../Resources/Svg/AuthIcons';

const CustomInput = ({inputStyle, inputContainerStyle, inputMode, placeholder, touched, value, error, onChangeText, onFocus, onBlur, submit, ...props}) => {
  return (
    <>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: touched ? colors.primarycolor : colors.boxGray,
          },
          inputContainerStyle,
        ]}>
        <TextInput
          inputMode={inputMode}
          placeholderTextColor={colors.textGray}
          placeholder={placeholder}
          numberOfLines={1}
          value={value}
          onChangeText={onChangeText}
          editable
          onFocus={onFocus}
          onBlur={onBlur}
          style={[styles.input, inputStyle]}
          {...props}
        />
        {props?.password && (
          <>
            {props?.forgot && (
              <TouchableOpacity>
                <Text style={styles.pinktext2}>Forgot ?</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => {
                props.setViewPass(!props?.secureTextEntry);
              }}>
              <SvgXml xml={props?.secureTextEntry ? eyesvg : eyesvg2} width={responsiveHeight(4)} height={responsiveWidth(6)} />
            </TouchableOpacity>
          </>
        )}
        {touched && (
          <View style={styles.label}>
            <Text style={styles.pinktext}>{placeholder}</Text>
          </View>
        )}
      </View>
      {error && submit && <Text style={styles.redtext}>{error + ' '}!</Text>}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: responsiveHeight(2.5),
    // justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
    width: responsiveWidth(88),
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
  redtext: {
    color: colors.red,
    fontFamily: fontfamily.fontRegular,
    fontSize: RFValue(11),
    marginStart: responsiveWidth(2),
  },
  pinktext2: {
    color: colors.pink,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(14),
  },
});
