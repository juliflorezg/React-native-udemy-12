import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
// import { styles } from '../theme/appTheme';
export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };
  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };
  return (
    <View style={{flex: 1, backgroundColor: 'turquoise'}}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => String(item)}
        ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});
