import React, {useState} from 'react';
import {View, Switch, Platform} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousValue => !previousValue);

  return (
    <View
      style={{
        marginHorizontal: 20,
      }}>
      <HeaderTitle title="Switch component" />
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
