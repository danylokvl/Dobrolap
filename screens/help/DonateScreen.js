import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import DonateInput from "../../components/help-components/DonateInput";
import CheckListItem from "../../components/checklist-components/CheckListItem";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const DonateScreen = () => {
  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}>Внесення Коштів</Headline>
      <DonateInput />
      <View style={styles.DonateScreen__checkListItem}>
        <CheckListItem>Внести кошти анонімно</CheckListItem>
      </View>
      <PrimaryButton>Продовжити</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 46,
    paddingBottom: 35,
    justifyContent: "space-between",
  },

  DonateScreen__checkListItem: {
    paddingTop: 40,
    paddingBottom: 100,
  },
});

export default DonateScreen;
