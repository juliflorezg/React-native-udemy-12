import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
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

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert component" />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};
