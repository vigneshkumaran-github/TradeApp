import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {backspacesvg} from '../Resources/Svg/AuthIcons';

const NumberPad = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  return (
    <View style={styles.container}>
      {data?.map((item, index) => (
        <TouchableOpacity key={index} style={styles.btn} onPress={()=>{props?.onPressHandler()}}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{props?.onPressHandler()}}>
        <Text style={styles.text}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{props?.onDeletePress()}}>
        <SvgXml xml={backspacesvg} width={responsiveWidth(7)} height={responsiveHeight(3)} />
      </TouchableOpacity>
    </View>
  );
};

export default NumberPad;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    // height:responsiveHeight(30),
    position: 'absolute',
    bottom: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    width: responsiveWidth(33),
    height: responsiveHeight(7),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(20),
  },
});
