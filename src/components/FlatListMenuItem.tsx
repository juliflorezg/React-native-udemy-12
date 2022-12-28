import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {MenuItem} from '../interfaces/menuItem';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

type NavigationProp = StackNavigationProp<RootStackParams>;

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation<NavigationProp>();

  // const {colors} = useTheme();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(menuItem.component as keyof RootStackParams)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={20} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <Icon
          name="caret-right"
          size={20}
          color={colors.primary}
          style={styles.goIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  itemText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 18,
  },
  goIcon: {
    marginLeft: 'auto',
  },
});
