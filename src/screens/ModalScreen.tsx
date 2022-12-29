import React, {useContext, useState} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';
export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 3,
        }}
        onPress={() => setIsVisible(true)}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>OPEN MODAL</Text>
      </TouchableOpacity>
      {/* <Button title="Open modal" onPress={() => setIsVisible(true)} /> */}
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* black background */}
        <View
          style={{
            flex: 1,
            // width: 100,
            // height: 100,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.card,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.5,
              elevation: 10,
              borderRadius: 15,
            }}>
            <HeaderTitle title="Modal" />
            <Text style={{fontSize: 18, marginBottom: 15}}>Modal Body</Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                alignItems: 'center',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 3,
              }}
              onPress={() => setIsVisible(false)}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>CLOSE</Text>
            </TouchableOpacity>
            {/* <Button title="Close" onPress={() => setIsVisible(false)} /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
