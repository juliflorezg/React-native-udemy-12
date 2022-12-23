import React, {useState} from 'react';
import {Switch, Platform} from 'react-native';

interface Props {
  isOn: boolean;
  onChange?: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousValue => !previousValue);
    onChange!(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#a0a0a0', true: 'pink'}}
      thumbColor={
        Platform.OS === 'android' ? (isEnabled ? '#8f00cd' : '#f4f3f4') : ''
      }
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
