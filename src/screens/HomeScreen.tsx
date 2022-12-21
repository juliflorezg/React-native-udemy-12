import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>
        <Icon name="water" size={40} color="blue" />
      </Text>
    </View>
  );
};
