import {Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {colors, fontfamily} from '../../../Constants/DesignConstants';
import {RFValue} from 'react-native-responsive-fontsize';
import {countryCode} from '../../../Constants/DataConstants';

interface CountryModalProps {
  countryModal: boolean;
  setCountryModal: (value: boolean) => void;
  setCountrySelected: (value: object) => void;
}

const CountryModal: FC<CountryModalProps> = ({countryModal, setCountryModal, setCountrySelected}) => {
  const onSelectHandler = (val: object): void => {
    setCountrySelected(val);
    setCountryModal(!countryModal);
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={countryModal}
      onRequestClose={() => {
        setCountryModal(!countryModal);
      }}>
      <TouchableOpacity
        style={[styles.centeredView]}
        activeOpacity={1}
        onPress={() => {
          setCountryModal(!countryModal);
        }}>
        <View style={[styles.modalView]}>
          <ScrollView style={{maxHeight: responsiveHeight(17)}} showsVerticalScrollIndicator={false}>
            {countryCode.map((item, index) => (
              <TouchableOpacity
                style={styles.itemView}
                key={index}
                onPress={() => {
                  onSelectHandler(item);
                }}>
                {/* <Image source={require('../../../Resources/Images/country.png')} style={styles.image} resizeMode="contain" /> */}
                <Text style={styles.grayText}>{item?.countryname}</Text>
                <Text style={styles.grayText}>{item.code}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  modalView: {
    width: responsiveWidth(40),
    borderRadius: 1,
    // borderWidth: 0.2,
    borderColor: colors.primarycolor,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginTop: responsiveHeight(36),
    marginStart: responsiveWidth(7),
    elevation: 3,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderColor: colors.gray,
    width: '100%',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal:responsiveWidth(2)
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
});
