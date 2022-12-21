import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/menuItem';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../theme/appTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'shield-alt',
    components: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };
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
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
