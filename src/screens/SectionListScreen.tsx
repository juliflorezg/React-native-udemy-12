import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {publishers} from '../data/sectionListData';
import {styles} from '../theme/appTheme';
export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
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
        ListHeaderComponent={() => (
          <HeaderTitle title="SectionList component" />
        )}
        ListFooterComponent={() => (
          <HeaderTitle title={`Total publishers: ${publishers.length}`} />
        )}
        renderSectionFooter={({section}) => (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 10,
              color: 'black',
            }}>
            Total characters: {section.data.length}
          </Text>
        )}
      />
    </View>
  );
};
