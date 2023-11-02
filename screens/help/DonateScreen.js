import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";

import Headline from "../../components/typography/Headline";
import LabelSemiBold from "../../components/typography/LabelSemiBold";
import { COLORS } from "../../constants/colors";
import { useState } from "react";

const DonateScreen = () => {
  const [number, setNumber] = useState(1000);

  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}> Внесення Коштів </Headline>
      <View style={styles.DonateScreen__content}>
        <LabelSemiBold>Введіть Суму</LabelSemiBold>
        <View style={styles.DonateScreen__inputContainer}>
          <TextInput
            style={[
              styles.DonateScreen__input,
              styles.DonateScreen__currencyText,
            ]}
            value={number.toString()}
            onChangeText={setNumber}
            placeholder={number.toString()}
            placeholderTextColor={COLORS.primary}
            textAlign='center'
            keyboardType='numeric'
          />
          <Text style={styles.DonateScreen__currencyText}> грн</Text>
        </View>
        <View style={styles.DonateScreen__chipsContainer}>
          <View style={styles.divider} />
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 46,
    alignItems: "center",
  },
  DonateScreen__content: {
    marginTop: 110,
    width: "100%",
    alignItems: "center",
    gap: 24,
  },
  DonateScreen__inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  DonateScreen__input: {
    height: 100,
  },
  DonateScreen__currencyText: {
    alignSelf: "center",
    fontSize: 40,
    fontFamily: "FixelDisplay-SemiBold",
    color: COLORS.primary,
  },

  DonateScreen__chipsContainer: {
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  divider: {
    backgroundColor: COLORS.outline,
    height: 1,
    width: "100%",
  },
});

export default DonateScreen;
