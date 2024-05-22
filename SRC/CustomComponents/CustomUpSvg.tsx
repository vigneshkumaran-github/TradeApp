import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { arrowupwhitesvg } from '../Resources/Svg/HomeIcons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CustomUpSvg = ({color}) => {
  return (
    <SvgXml xml={`<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.16795 1.24808C3.56377 0.654342 4.43623 0.654342 4.83205 1.24808L6.96353 4.4453C7.40657 5.10986 6.93018 6 6.13148 6H1.86852C1.06982 6 0.59343 5.10985 1.03647 4.4453L3.16795 1.24808Z" fill=${color}/>
    </svg>`} width={responsiveWidth(5)} height={responsiveHeight(1)} />
  )
}

export default CustomUpSvg

const styles = StyleSheet.create({})