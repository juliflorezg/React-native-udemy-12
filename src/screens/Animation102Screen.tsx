import React, {useContext, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0}, // Back to zero
          useNativeDriver: true,
        },
      ).start();
      console.log(pan.getLayout());
    },
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        // style={[pan.getLayout(), styles.purpleBox]}
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          transform: [
            {translateX: pan.getLayout().left},
            {translateY: pan.getLayout().top},
          ],
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
    backgroundColor: '#61dafb',
    width: 150,
    height: 150,
    borderRadius: 5,
  },
});
