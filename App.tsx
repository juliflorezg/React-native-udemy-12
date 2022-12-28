import 'react-native-gesture-handler';
import React from 'react';
// import {View, Text} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {useColorScheme} from 'react-native';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
};

const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? customTheme : DefaultTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
