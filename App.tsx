import 'react-native-gesture-handler';
import React from 'react';
// import {View, Text} from 'react-native';
import // DarkTheme,
// DefaultTheme,
// NavigationContainer,
// Theme,
'@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';
// import {useColorScheme} from 'react-native';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     background: '#16121b',
//   },
// };

const App = () => {
  // const scheme = useColorScheme();

  return (
    <ThemeProvider>
      {/*theme={scheme === 'dark' ? customTheme : DefaultTheme}
        theme={theme} */}

      <Navigator />
      {/* </NavigationContainer> */}
    </ThemeProvider>
  );
};

export default App;
