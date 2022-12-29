import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, setPosition} = useAnimation();

  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Animated.View
        //! Style property 'top' is not supported by native animated module (we can't animate top property)
        // style={{...styles.purpleBox, opacity, marginBottom: 20, top}}
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateX: position,
            },
            {
              translateY: position,
            },
          ],
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          fadeIn();
          setPosition(-100);
        }}
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <Text style={styles.buttonText}>Fade In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          fadeOut();
          setPosition(0, -100);
        }}
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <Text style={styles.buttonText}>Fade Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor:
      'hsl(358.2857142857143, 94.59459459459461%, 7.254901960784313%)',
    width: 150,
    height: 150,
  },
  buttonText: {
    fontSize: 25,
  },
});
