import React, {useContext, useState} from 'react';
import {Switch, Platform} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

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

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{false: '#a0a0a0', true: colors.card}}
      thumbColor={
        Platform.OS === 'android'
          ? isEnabled
            ? colors.primary
            : '#f4f3f4'
          : ''
      }
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
