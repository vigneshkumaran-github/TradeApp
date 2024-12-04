import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {applesvg, arrowupwhitesvg, fbsvg, twittersvg} from '../../../Resources/Svg/HomeIcons';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomUpSvg from '../../../CustomComponents/CustomUpSvg';
import CustomDownSvg from '../../../CustomComponents/CustomDownSvg';

const PortfolioCard = memo(({item, index}) => {
  const color = item?.data?.open < item.data?.close ? colors.pink : colors.blue;
  const isUp = item?.data?.open < item.data?.close ? true : false;
  return (
    <View style={styles.card}>
      <View style={styles.rowView}>
        <SvgXml xml={index === 0 ? fbsvg : index === 1 ? applesvg : twittersvg} width={responsiveWidth(12)} height={responsiveHeight(6)} />
        <View style={{justifyContent: 'space-between', marginStart: responsiveWidth(3)}}>
          <Text style={styles.text1}>{item?.data?.symbol?.symbol}</Text>
          <Text style={[styles.text3, {color: colors.textGray}]}>{item?.data?.symbol?.type}</Text>
        </View>
      </View>

      <Text style={[styles.text2, {marginTop: responsiveHeight(2)}]}>
        {item?.data?.change_price?.toString().split('.')[0]}
        <Text style={[styles.text3, {color: colors.textGray}]}>.{item?.data?.change_price?.toString().split('.')[1]?.slice(0, 4)}</Text>
      </Text>

      <View style={[styles.rowView, {marginTop: responsiveHeight(0.5)}]}>
        <Text style={[styles.text2, {color: colors.pink}]}>
          +$2<Text style={styles.text3}>.16</Text>
        </Text>
        <View style={[styles.pinkView, {backgroundColor: color}]}>
          {isUp ? <CustomUpSvg color={colors.white} /> : <CustomDownSvg color={colors.white} />}
          <Text style={[styles.text3, {color: colors.white}]}>
            {item?.data?.change_price_percentage?.toString().split('.')[0]}.{item?.data?.change_price_percentage?.toString().split('.')[1]?.slice(0, 1)}%
          </Text>
        </View>
      </View>
    </View>
  );
});
export default memo(PortfolioCard);

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(55),
    paddingVertical: responsiveHeight(1),
    marginEnd: responsiveWidth(2),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(16),
  },
  text2: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(14),
  },
  text3: {
    color: colors.lightBlue,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(10),
  },
  pinkView: {
    height: responsiveHeight(2.5),
    backgroundColor: colors.pink,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(1.5),
    marginStart: responsiveWidth(2),
  },
});
