import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';
export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#40005b',
          width: 150,
          height: 40,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};
