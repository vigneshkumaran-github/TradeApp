import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {LineChart} from 'react-native-chart-kit';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {dropdownsvg} from '../../../Resources/Svg/AuthIcons';
import {applesvg, arrowupsvg, fbsvg, twittersvg} from '../../../Resources/Svg/HomeIcons';
import CustomUpSvg from '../../../CustomComponents/CustomUpSvg';
import CustomDownSvg from '../../../CustomComponents/CustomDownSvg';

const StockCard = memo(({item, index}) => {
  const data1 = useMemo(() => item?.data?.price_histories?.map(historyItem => historyItem?.price), [item]);
  const color = useMemo(() => (item?.data?.open < item.data?.last_price ? colors.green : colors.red1), [item]);
  const isUp = useMemo(() => item?.data?.open < item.data?.last_price, [item]);

  return (
    <View style={styles.card}>
      {/* Left View */}
      <View style={styles.view1}>
        <SvgXml xml={index === 0 ? fbsvg : index === 1 ? applesvg : twittersvg} width={responsiveWidth(12)} height={responsiveHeight(6)} />
        <View style={{justifyContent: 'space-between', marginStart: responsiveWidth(3)}}>
          <Text style={styles.text1}>{item?.data?.symbol?.symbol}</Text>
          <Text style={styles.text2}>{item?.data?.symbol?.type}</Text>
        </View>
      </View>

      {/* Graph View */}
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
          width={responsiveWidth(26) + responsiveWidth(26) / (data1.length - 1)} // from react-native
          height={responsiveHeight(9)}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
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
              height: responsiveHeight(9),
            },
            barPercentage: 1,
            fillShadowGradientFromOpacity: 0.5,
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
            marginVertical: 0,
            // borderRadius: 16,
            paddingRight: responsiveWidth(0),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            marginBottom: 0,
          }}
        />
      </View>

      {/* Right View */}

      <View style={styles.rightView}>
        <Text style={[styles.text1, {fontSize: RFValue(12)}]}>
          ${item?.data?.change_price?.toString().split('.')[0]}.{item?.data?.change_price?.toString().split('.')[1]?.slice(0, 2)}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isUp ? <CustomUpSvg color={color} /> : <CustomDownSvg color={color} />}
          <Text style={[styles.text3, {color: color}]}>
            {item?.data?.change_price_percentage?.toString().split('.')[0]}.{item?.data?.change_price_percentage?.toString().split('.')[1]?.slice(0, 1)}%
          </Text>
        </View>
      </View>
    </View>
  );
});

export default memo(StockCard);

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    height: responsiveHeight(9),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  view1: {
    width: responsiveWidth(43),
    flexDirection: 'row',
  },
  graph: {
    width: responsiveWidth(26),
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
    color: colors.blue,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(10),
  },
  rightView: {
    width: responsiveWidth(19),
    height: responsiveHeight(6.5),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
