import React, {useContext} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';
import {ThemeContext} from '../context/theme/ThemeContext';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'My First Alert',
      'Generic alert message',
      [
        {text: 'CanCel', onPress: () => console.log('cancel pressed~!!')},
        {text: 'ok', onPress: () => console.log('OK pressed~!!')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('alert dismissed =('),
      },
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert component" />
      <Pressable
        onPress={showAlert}
        style={{...localStyles.button, backgroundColor: colors.primary}}>
        <Text style={localStyles.buttonText}>Show Alert</Text>
      </Pressable>
      {/* <Button title="Show Alert" onPress={showAlert} /> */}
      <View style={{height: 10}} />
      <TouchableOpacity
        onPress={showPrompt}
        style={{...localStyles.button, backgroundColor: colors.primary}}
        activeOpacity={0.85}>
        <Text style={localStyles.buttonText}>Show Prompt</Text>
      </TouchableOpacity>
      {/* <Button title="Show Prompt" onPress={showPrompt} /> */}
    </View>
  );
};

const localStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
