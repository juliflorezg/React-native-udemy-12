import React, {useContext} from 'react';
import {SectionList, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/itemSeparator';
import {ThemeContext} from '../context/theme/ThemeContext';
import {publishers} from '../data/sectionListData';
import {styles} from '../theme/appTheme';
export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={publishers}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {publisher}}) => (
          <View style={{backgroundColor: colors.background}}>
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
              color: colors.primary,
            }}>
            Total characters: {section.data.length}
          </Text>
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
