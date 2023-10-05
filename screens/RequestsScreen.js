import { Text, View, StyleSheet, ScrollView } from "react-native";
import FilterChip from "../components/chips/FilterChip";

const RequestsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.filterChipsBlock}
        showsHorizontalScrollIndicator={false}
      >
        <FilterChip>Найближче</FilterChip>
        <FilterChip>Збір коштів</FilterChip>
        <FilterChip>Волонтерам</FilterChip>
        <FilterChip>Адопція / Перетримка</FilterChip>
        <FilterChip>Ветеринарам</FilterChip>
        <FilterChip>Юристам</FilterChip>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginHorizontal: 16,
  },

  filterChipsBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 16,
  },
});

export default RequestsScreen;
