import { View, StyleSheet, ScrollView, Animated } from "react-native";
import { useRef } from "react";

import FilterChip from "../components/chips/FilterChip";
import RequestScreenCard from "../components/cards/RequestScreenCard";
import LargeFAB from "../components/buttons/LargeFAB";

const RequestsScreen = () => {
  const scrollViewRef = useRef(null);

  return (
    <>
      <ScrollView style={styles.screen} scrollEventThrottle={16}>
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
        </View>
      </ScrollView>
      <LargeFAB icon='add-outline'>Створити запит</LargeFAB>
    </>
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
