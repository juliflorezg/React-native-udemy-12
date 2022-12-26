import React, {useState} from 'react';
import {View, Button, Modal, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Open modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* black background */}
        <View
          style={{
            flex: 1,
            // width: 100,
            // height: 100,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title="Modal" />
            <Text>Modal Body</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
