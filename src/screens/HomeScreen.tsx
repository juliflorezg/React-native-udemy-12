import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
