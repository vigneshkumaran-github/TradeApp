import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontfamily} from '../../Constants/DesignConstants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Resources/Images/onboarding1.png')}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.text1}>Buy & Trade Top Stock</Text>
      <Text style={styles.text2}>
        A place that provides you with the world's top stocks that you can buy
        and trade
      </Text>

      <View style={styles.indicatorView}>
        <View style={styles.indicator1} />
        <View style={styles.indicator2} />
      </View>

      <CustomButton onPress={()=>{navigation.navigate('Onboard2')}} title={'Next'} />
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: responsiveHeight(5),
  },
  btntext: {
    color: colors.primarycolor,
    fontFamily: fontfamily.fontBold,
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    marginTop: responsiveHeight(3.5),
    fontSize: RFValue(20),
  },
  text2: {
    color: colors.textGray,
    fontFamily: fontfamily.fontMedium,
    marginTop: responsiveHeight(2.5),
    fontSize: RFValue(12),
    textAlign: 'center',
    width: responsiveWidth(80),
    lineHeight: responsiveHeight(3),
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(40),
  },
  indicatorView: {
    marginVertical: responsiveHeight(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator1: {
    width: 10,
    height: 10,
    backgroundColor: colors.primarycolor,
    borderRadius: 10,
    marginRight: responsiveWidth(1),
  },
  indicator2: {
    width: 30,
    height: 10,
    backgroundColor: colors.primarycolorlight,
    borderRadius: 10,
    marginLeft: responsiveWidth(1),
  },
});
