import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useMemo } from 'react';
import ListHeader from './ListHeader';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import PortfolioCard from './PortfolioCard';
import {portfoliodata} from '../../../Constants/DataConstants';
import { useSelector } from 'react-redux';

const HorizontalList = () => {
  const data = useSelector(state => state.myCryptoData.cryptoData);
  const memoizedData = useMemo(() => data, [data]);
  return (
    <View style={styles.container}>
      <ListHeader title={'Portfolio'} onPress={() => {}} />
      {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{marginStart: responsiveWidth(8)}}>
        {data && data?.length > 0 && data?.map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </ScrollView> */}
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={memoizedData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <PortfolioCard key={index} item={item} index={index} />}
        style={{marginStart: responsiveWidth(8)}}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    alignSelf: 'center',
  },
});
