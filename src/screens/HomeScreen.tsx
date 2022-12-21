import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
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

  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text style={{color: 'black'}}>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };
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
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
