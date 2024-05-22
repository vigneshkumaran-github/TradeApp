import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';

const ListHeader = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.pinktext}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(2),
  },
  text1: {
    color: colors.textBlack,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(16),
  },
  pinktext: {
    color: colors.pink,
    fontFamily: fontfamily.fontBold,
    fontSize: RFValue(14),
  },
});
