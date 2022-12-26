import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {publishers} from '../data/sectionListData';
import {styles} from '../theme/appTheme';
export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      {/* <HeaderTitle title="SectionList component" /> */}
      <SectionList
        sections={publishers}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {publisher}}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={publisher} />
          </View>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
};
