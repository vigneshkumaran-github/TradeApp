import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {applesvg, arrowupwhitesvg, fbsvg, twittersvg} from '../../../Resources/Svg/HomeIcons';
import {colors, fontWeight, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {LineChart} from 'react-native-chart-kit';

const StocksCardWithGraph = memo(({item, index}) => {
  const data1 = useMemo(() => item?.data?.price_histories?.map(historyItem => historyItem?.price), [item]);
  const color = useMemo(() => (item?.data?.open < item.data?.last_price ? colors.green : colors.red1), [item]);
  const isUp = useMemo(() => item?.data?.open < item.data?.last_price, [item]);

  return (
    <View style={styles.card}>
      {/* Top View */}
      <View style={{marginStart: responsiveWidth(4)}}>
        <View style={styles.rowView}>
          <SvgXml xml={index === 0 ? fbsvg : index === 1 ? applesvg : twittersvg} width={responsiveWidth(12)} height={responsiveHeight(6)} />
          <View style={{justifyContent: 'space-between', marginStart: responsiveWidth(3)}}>
            <Text style={styles.text1}>{item?.data?.symbol?.symbol}</Text>
            <Text style={styles.text2}>{item?.data?.symbol?.type}</Text>
          </View>
        </View>

        <View style={styles.amountView}>
          <View style={[styles.rowView]}>
            <Text style={[styles.text1]}>
              ${item?.data?.change_price?.toString().split('.')[0]}
              <Text style={[styles.text2, {color: colors.textGray}]}>.{item?.data?.change_price?.toString().split('.')[1]?.slice(0, 2)}</Text>
            </Text>
            <View style={styles.pinkView}>
              <SvgXml xml={arrowupwhitesvg} width={responsiveWidth(5)} height={responsiveHeight(1)} />
              <Text style={[styles.text3, {color: colors.white}]}>
                {item?.data?.change_price_percentage?.toString().split('.')[0]}.{item?.data?.change_price_percentage?.toString().split('.')[1]?.slice(0, 1)}%
              </Text>
            </View>
          </View>

          <Text style={[styles.text2, {color: colors.textGray}]}>
            {' '}
            ${item?.data?.change_price?.toString().split('.')[0]}.{item?.data?.change_price?.toString().split('.')[1]?.slice(0, 2)}
          </Text>
        </View>
      </View>

      {/* GraphView */}
      <View style={styles.graph}>
        <LineChart
          data={{
            labels: ['', '30m', '1H', '4H', '1D', '7D'],
            datasets: [
              {
                data: data1,
              },
            ],
          }}
          bezier
          width={responsiveWidth(54) + responsiveWidth(54) / (25 - 1)} // from react-native
          height={responsiveHeight(17)}
          withDots={false}
          withInnerLines={true}
          withOuterLines={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          //   yAxisLabel="$"
          //   yAxisSuffix="k"
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: colors.white,
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => color,
            labelColor: (opacity = 1) => colors.textGray,
            style: {
              //   borderRadius: 16,
            },
            barPercentage: 1,
            fillShadowGradientFromOpacity: 0.4,
            fillShadowGradientFrom: color,
            fillShadowGradientTo: colors.white,
            fillShadowGradientFromOffset: 0.4,
            fillShadowGradientToOffset: 0.7,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: colors.pink,
            },
            propsForLabels: {
              fontFamily: fontfamily.fontBold,
            },
          }}
          style={{
            // marginVertical: 8,
            // borderRadius: 16,
            paddingRight: responsiveWidth(0),
            paddingTop: 0,
          }}
        />
      </View>
    </View>
  );
});

export default memo(StocksCardWithGraph);

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
    color: colors.textGray,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(12),
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
    marginStart: responsiveWidth(1),
  },
  amountView: {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(7),
    justifyContent: 'space-between',
    borderLeftWidth: 2,
    borderColor: colors.pink,
    paddingStart: responsiveWidth(2),
  },
  graph: {
    height: responsiveHeight(20),
    // backgroundColor: 'red',
    marginTop: responsiveHeight(1),
  },
});
