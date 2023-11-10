import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import DonateInput from "../../components/help-components/DonateInput";
import CheckListItem from "../../components/checklist-components/CheckListItem";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import ProgressBar2Steps from "../../components/progress-bars/ProgressBar2Steps";

const DonateScreen = ({ navigation }) => {
  const [donationAmount, setDonationAmount] = useState("1 000");

  return (
    <View style={styles.screen}>
      <View style={styles.DonateScreen__headlineAndProgressBar}>
        <Headline color={COLORS.primary}>Внесення Коштів</Headline>
        <ProgressBar2Steps />
      </View>
      <DonateInput onValueChange={(amount) => setDonationAmount(amount)} />
      <View style={styles.DonateScreen__checkListItem}>
        <CheckListItem>Внести кошти анонімно</CheckListItem>
      </View>
      <PrimaryButton
        onPress={() =>
          navigation.navigate("Payment Methods", { amount: donationAmount })
        }
      >
        Продовжити
      </PrimaryButton>
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

  DonateScreen__headlineAndProgressBar: {
    gap: 40,
    paddingBottom: 40,
  },

  DonateScreen__checkListItem: {
    paddingTop: 40,
    paddingBottom: 100,
  },
});

export default DonateScreen;
