import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {arrowupwhitesvg} from '../Resources/Svg/HomeIcons';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const CustomDownSvg = ({color}) => {
  return (
    <SvgXml
      xml={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.79268 6H4.05268C3.41268 6 3.09268 6.80951 3.54601 7.28405L6.99934 10.8989C7.55268 11.4781 8.45268 11.4781 9.00601 10.8989L10.3193 9.52415L12.4593 7.28405C12.906 6.80951 12.586 6 11.946 6H7.79268Z" fill=${color}/>
      </svg>`}
      width={responsiveWidth(5)}
      height={responsiveHeight(3)}
    />
  );
};

export default CustomDownSvg;

const styles = StyleSheet.create({});
