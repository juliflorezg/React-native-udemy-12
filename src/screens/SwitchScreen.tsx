import React, {useState} from 'react';
import {View, Switch, Platform} from 'react-native';
export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousValue => !previousValue);

  return (
    <View
      style={{
        marginTop: 100,
        borderColor: 'turquoise',
        borderWidth: 1,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Switch
        trackColor={{false: '#a0a0a0', true: 'pink'}}
        thumbColor={
          Platform.OS === 'android' ? (isEnabled ? '#8f00cd' : '#f4f3f4') : ''
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
