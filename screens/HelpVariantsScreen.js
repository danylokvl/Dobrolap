import { View, StyleSheet, ScrollView } from "react-native";

import LabelSemiBold from "../components/typography/TitleLarge";
import HelpVariantCard from "../components/cards/HelpVariantCard";
import TopAppNavigation from "../components/TopAppNavigation";
import Headline from "../components/typography/Headline";

const HelpVariantsScreen = () => {
  return (
    <>
      <TopAppNavigation headline='Допомога' />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Headline primaryColor>Допомога</Headline>
          <LabelSemiBold centered>
            Оберіть, як ви хочете допомогти
          </LabelSemiBold>
          <HelpVariantCard>Внесення Коштів</HelpVariantCard>
          <HelpVariantCard>Перетримка / Адопція</HelpVariantCard>
          <HelpVariantCard>Волонтерство</HelpVariantCard>
          <HelpVariantCard>Ветеринарна Допомога</HelpVariantCard>
          <HelpVariantCard>Юридична Консультація</HelpVariantCard>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 24,
  },
});

export default HelpVariantsScreen;
