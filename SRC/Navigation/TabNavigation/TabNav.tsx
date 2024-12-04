import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../Constants/DesignConstants';
import Onboard from '../../Screens/OnboardScreens/Onboard';
import Onboard2 from '../../Screens/OnboardScreens/Onboard2';
import {exchangesvg, historysvg1, historysvg2, homesvg1, homesvg2, portfoliosvg1, portfoliosvg2, profilesvg1, profilesvg2} from '../../Resources/Svg/NavigationIcons';
import Home from '../../Screens/HomeScreens/Home';
import Portfolio from '../../Screens/PortfolioScreens/Portfolio';
import History from '../../Screens/HistoryScreens/History';
import Profile from '../../Screens/ProfileScreens/Profile';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabel: '',
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: responsiveHeight(11),
          backgroundColor: colors.white,
          alignItems: 'center',
          paddingVertical: responsiveHeight(1.5),
          elevation: -0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primarycolor,
        tabBarInactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        detachInactiveScreens={true}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => <SvgXml xml={focused ? homesvg2 : homesvg1} height={responsiveHeight(4)} width={responsiveWidth(7)} />,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {height: responsiveHeight(8), flex: 1, marginHorizontal: responsiveWidth(2)},
        }}
      />
      <Tab.Screen
        detachInactiveScreens={true}
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({color, size, focused}) => <SvgXml xml={focused ? portfoliosvg2 : portfoliosvg1} height={responsiveHeight(4)} width={responsiveWidth(7)} />,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {height: responsiveHeight(8), flex: 1, marginEnd: '7%'},
        }}
      />
      <Tab.Screen
        detachInactiveScreens={true}
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color, size, focused}) => <SvgXml xml={focused ? historysvg2 : historysvg1} height={responsiveHeight(4)} width={responsiveWidth(7)} />,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {height: responsiveHeight(8), flex: 1, marginStart: '7%'},
        }}
      />
      <Tab.Screen
        detachInactiveScreens={true}
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => <SvgXml xml={focused ? profilesvg2 : profilesvg1} height={responsiveHeight(4)} width={responsiveWidth(7)} />,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {height: responsiveHeight(8), flex: 1, marginHorizontal: responsiveWidth(2)},
        }}
      />

      <Tab.Screen
        name="Settings"
        component={''}
        options={({navigation}) => ({
          tabBarButton: props => (
            <TouchableOpacity
              style={styles.homecircle1}
              onPress={() => {
                //    handlePresentModalPress()
              }}>
              <View style={styles.homecircle2}>
                <SvgXml xml={exchangesvg} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  homecircle1: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    borderRadius: responsiveWidth(20) / 2,
    backgroundColor: colors.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: -responsiveHeight(6),
    right: responsiveWidth(41),
  },
  homecircle2: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(20) / 2,
    backgroundColor: colors.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
