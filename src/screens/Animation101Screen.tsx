import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => console.log('fade in animation finished!'));

    Animated.timing(top, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(top, {
      toValue: -100,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

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
              translateY: top,
            },
          ],
        }}
      />
      <Button title="fade in" onPress={fadeIn} />
      <Button title="fade out" onPress={fadeOut} />
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
