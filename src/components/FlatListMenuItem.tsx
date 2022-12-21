import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/menuItem';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="grey" size={20} />
        <Text style={styles.itemText}>
          {menuItem.name} - {menuItem.icon}
        </Text>
        <Icon
          name="caret-right"
          size={20}
          color="green"
          style={styles.goIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', backgroundColor: 'white'},
  itemText: {
    marginLeft: 10,
    color: 'black',
  },
  goIcon: {
    marginLeft: 'auto',
  },
});
