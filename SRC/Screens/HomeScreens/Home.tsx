import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useRef} from 'react';
import {colors} from '../../Constants/DesignConstants';
import HomeHeader from './Components/HomeHeader';
import HomeBanner from './Components/HomeBanner';
import HorizontalList from './Components/HorizontalList';
import ListWithGraph from './Components/ListWithGraph';
import StockList from './Components/StockList';
import {io} from 'socket.io-client';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToArray} from '../../Redux/Reducers/AddData';
import {debounce, throttle} from 'lodash';

const Home = memo(() => {
  const socketConnection = useRef(null); // Initialize as null
  const navigation = useNavigation();
  const WEB_SOCKET_URL = 'https://staging-websocket.pibase.io/ticker';

  const dispatch = useDispatch();

  useEffect(() => {
    const initSocket = () => {
      socketConnection.current = io(WEB_SOCKET_URL, {transports: ['websocket'], path: '/public'}); // Initialize socket
      socketConnection.current.on('connect', () => {
        console.log('Connected to server');
      });
      socketConnection.current.on('events', handleEvents);
      socketConnection.current.on('error', handleError);
    };

    const cleanupSocket = () => {
      if (socketConnection.current) {
        socketConnection.current.disconnect();
        socketConnection.current.off('error', '');
        socketConnection.current = null;
      }
    };

    initSocket();

    return () => {
      cleanupSocket();
    };
  }, []);

  const handleEvents = debounce(data => {
    try {
      throttledDispatch(data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }, 0); // Adjust debounce delay as needed

  const handleError = error => {
    console.error('Socket connection error:', error);
  };

  const throttledDispatch = throttle(action => {
    dispatch(addToArray(action));
  }, 0);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeBanner />

        {/*ScrollView Horizontal  */}
        <HorizontalList />
        {/*ScrollView Horizontal  */}
        <ListWithGraph />
        <StockList />
      </ScrollView>
    </View>
  );
});

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
