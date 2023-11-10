import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import ProgressBar2Steps from "../../components/progress-bars/ProgressBar2Steps";
import CreditCard from "../../components/help-components/CreditCard";
import RadioButtonBlock from "../../components/help-components/RadioButtonBlock";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const PaymentMethodScreen = ({ route }) => {
  const paymentMethods = ["Visa", "MasterCard", "Google Pay", "Apple Pay"];
  const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.screen} style={{ flex: 1 }}>
      <View style={styles.headlineAndProgressBar}>
        <Headline color={COLORS.primary}>Спосіб Оплати</Headline>
        <ProgressBar2Steps start />
      </View>
      <CreditCard />
      <View style={styles.radioButtons}>
        {paymentMethods.map((item, index) => {
          let chosen = index === currentSelectedItem ? true : false;
          return (
            <RadioButtonBlock
              chosen={chosen}
              key={index}
              onPress={() => setCurrentSelectedItem(index)}
            >
              {item}
            </RadioButtonBlock>
          );
        })}
      </View>
      <PrimaryButton icon='hand-coin-outline'>{`Сплатити ${route.params.amount} грн`}</PrimaryButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    paddingTop: 46,
    paddingBottom: 40,
  },
  headlineAndProgressBar: {
    gap: 40,
    paddingBottom: 40,
  },
  radioButtons: {
    paddingVertical: 40,

    rowGap: 16,
  },
});

export default PaymentMethodScreen;
