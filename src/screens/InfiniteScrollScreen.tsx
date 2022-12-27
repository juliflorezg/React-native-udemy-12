import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
// import { styles } from '../theme/appTheme';
import {FadeInImage} from '../components/FadeInImage';
export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i + 1;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  const renderItem = (item: number) => {
    // <Image
    //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
    //   style={{width: '100%', height: 400}}
    // />
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />;
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => String(item)}
        ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={50} color="turquoise" />
          </View>
        )}
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
