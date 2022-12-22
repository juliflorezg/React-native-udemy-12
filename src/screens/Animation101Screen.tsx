import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, setPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        //! Style property 'top' is not supported by native animated module (we can't animate top property)
        // style={{...styles.purpleBox, opacity, marginBottom: 20, top}}
        style={{
          ...styles.purpleBox,
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
      <Button
        title="fade in"
        onPress={() => {
          fadeIn();
          setPosition(-100);
        }}
      />
      <Button
        title="fade out"
        onPress={() => {
          fadeOut();
          setPosition(0, -100);
        }}
      />
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
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
});
