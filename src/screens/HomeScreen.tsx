import React from 'react';
import {View, FlatList} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          marginVertical: 5,
          opacity: 0.5,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu options" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
