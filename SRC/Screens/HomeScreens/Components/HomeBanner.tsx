import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';
import {arrowupsvg} from '../../../Resources/Svg/HomeIcons';

const HomeBanner = () => {
  return (
    <LinearGradient locations={[0, 0.8]} colors={['#3500D4', '#F61C7A88']} style={styles.banner}>
      <Text style={styles.grayText}>Your Total Balance</Text>

      <View style={styles.rowView}>
        <Text style={styles.whitetext}>$12,031,082.20</Text>
        <Text style={[styles.grayText, {marginTop: responsiveHeight(0.6)}]}>.26 </Text>
        <View style={styles.indicator}>
          <SvgXml xml={arrowupsvg} width={responsiveWidth(5)} height={responsiveHeight(1)} />
          <Text style={[styles.blackText, {color: colors.pink}]}>890%</Text>
        </View>
      </View>

      <Text style={styles.whitetext2}>$1,208.24</Text>

      {/* Bottom White Container */}
      <View style={styles.whiteContainer}>
        <View style={styles.rowView}>
          <View style={[styles.circle]} />
          <Text style={styles.blackText}>APPL: 70%</Text>
        </View>

        <View style={styles.rowView}>
          <View style={[styles.circle,{backgroundColor:colors.pink}]}  />
          <Text style={styles.blackText}>MSFT: 70%</Text>
        </View>

        <View style={styles.rowView}>
          <View style={[styles.circle,{backgroundColor:colors.primarycolorlight}]}  />
          <Text style={styles.blackText}>BA: 7.9%</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  banner: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'center',
  },
  grayText: {
    color: colors.white,
    fontFamily: fontfamily.fontMedium,
    fontSize: RFValue(12),
    opacity: 0.8,
  },
  whitetext: {
    color: colors.white,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(20),
  },
  whitetext2: {
    color: colors.white,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(14),
    opacity: 0.9,
    marginTop: responsiveHeight(1),
  },
  whiteContainer: {
    width: responsiveWidth(75),
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: responsiveHeight(5),
    marginTop: responsiveHeight(2.5),
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  blackText: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(10.5),
  },
  circle: {
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: responsiveWidth(6) / 2,
    backgroundColor: colors.primarycolor,
    marginEnd: responsiveWidth(1.5),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: responsiveWidth(0.8),
    height: responsiveHeight(2.5),
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: responsiveWidth(1),
    bottom: responsiveHeight(0.5),
  },
});
