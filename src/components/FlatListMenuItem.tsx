import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/menuItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  menuItem: MenuItem;
}

type NavigationProp = StackNavigationProp<RootStackParams>;

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(menuItem.component as keyof RootStackParams)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#8f00cd" size={20} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <Icon
          name="caret-right"
          size={20}
          color="#8f00cd"
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
