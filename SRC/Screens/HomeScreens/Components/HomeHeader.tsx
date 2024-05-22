import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { menusvg } from '../../../Resources/Svg/HomeIcons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text1}>Hi Kitsbase !</Text>
          <Text style={styles.text2}>Welcome to Tradebase</Text>
        </View>
      </View>

      <SvgXml xml={menusvg} width={responsiveWidth(7)} height={responsiveHeight(4)} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(9),
    paddingHorizontal: responsiveWidth(4),
  },
  image: {
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(7),
  },
  textContainer: {
    marginStart: responsiveWidth(4),
    justifyContent: 'space-evenly',
    height: responsiveHeight(8),
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(16),
  },
});
