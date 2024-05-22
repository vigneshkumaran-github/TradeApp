import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListHeader from './ListHeader';
import StockCard from './StockCard';
import {portfoliodata} from '../../../Constants/DataConstants';
import {useSelector} from 'react-redux';

const StockList = () => {
  const data = useSelector(state => state.myCryptoData.cryptoData);
  return (
    <View style={styles.container}>
      <ListHeader title={'Your watchlist'} />
      {data?.map((item, index) => (
        <StockCard key={index} item={item} index={index} />
      ))}
    </View>
  );
};

export default StockList;

const styles = StyleSheet.create({});
