import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRef } from "react";

import FilterChip from "../components/chips/FilterChip";
import RequestScreenCard from "../components/cards/RequestScreenCard";
import LargeFAB from "../components/buttons/LargeFAB";
import { COLORS } from "../constants/colors";

const RequestsScreen = () => {
  const scrollViewRef = useRef(null);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          contentContainerStyle={styles.filterChipsBlock}
          showsHorizontalScrollIndicator={false}
        >
          <FilterChip>Найближче</FilterChip>
          <FilterChip>Збір коштів</FilterChip>
          <FilterChip>Волонтерам</FilterChip>
          <FilterChip>Адопція / Перетримка</FilterChip>
          <FilterChip>Ветеринарам</FilterChip>
          <FilterChip scrollViewRef={scrollViewRef}>Юристам</FilterChip>
        </ScrollView>

        <RequestScreenCard />
        <RequestScreenCard />
        <View style={{ position: "absolute", bottom: 16, alignSelf: "center" }}>
          <LargeFAB icon='add-outline'>Створити запит</LargeFAB>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 8,
  },

  filterChipsBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 16,
  },
});

export default RequestsScreen;
