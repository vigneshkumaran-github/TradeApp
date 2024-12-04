import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListHeader from './ListHeader';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import PortfolioCard from './PortfolioCard';
import {portfoliodata} from '../../../Constants/DataConstants';
import StocksCardWithGraph from './StocksCardWithGraph';
import {useSelector} from 'react-redux';

const ListWithGraph = () => {
  const data = useSelector(state => state.myCryptoData.cryptoData);
  return (
    <View style={styles.container}>
      <ListHeader title={'Stocks'} onPress={() => {}} />
      {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{marginStart: responsiveWidth(8)}}>
        {data?.map((item, index) => (
          <StocksCardWithGraph key={index} item={item} index={index} />
        ))}
      </ScrollView> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <StocksCardWithGraph key={index} item={item} index={index} />}
        style={{marginStart: responsiveWidth(8)}}
      />
    </View>
  );
};

export default ListWithGraph;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    alignSelf: 'center',
  },
});
