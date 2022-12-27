import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesShowScreen = ({navigation}: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 10,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveSlide(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          // containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 4,
            backgroundColor: '#40005b',
          }}
        />
        <AnimatedTouchable
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 130,
            paddingVertical: 5,
            paddingHorizontal: 8,
            backgroundColor: '#40005b',
            borderRadius: 5,
            opacity,
          }}
          onPress={() => {
            if (isVisible.current) {
              navigation.navigate('HomeScreen');
            }
          }}
          disabled={!isVisible.current}>
          <Text style={{marginRight: 10, fontSize: 25, color: 'white'}}>
            Enter
          </Text>
          <Icon name="chevron-circle-right" color="white" size={25} />
        </AnimatedTouchable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#40005b',
  },
  subtitle: {
    fontSize: 16,
  },
});
