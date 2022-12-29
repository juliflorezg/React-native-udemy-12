import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/theme/ThemeContext';
export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  //* this extracts the types for every key in 'state'
  // type StateType = {
  //   isActive: boolean;
  //   isHungry: boolean;
  //   isHappy: boolean;
  // };
  type StateType = typeof state;
  type Field = keyof StateType;

  const onChange = (field: Field, value: boolean) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        marginHorizontal: 20,
      }}>
      <HeaderTitle title="Switch component" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => onChange('isActive', value)}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => onChange('isHungry', value)}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => onChange('isHappy', value)}
        />
      </View>

      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  switchText: {
    fontSize: 25,
  },
});
