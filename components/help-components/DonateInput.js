import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import FilterChip from "../chips/FilterChip";
import LabelSemiBold from "../typography/LabelSemiBold";
import { COLORS } from "../../constants/colors";

const DonateInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsChanged, setInputValueIsChanged] = useState(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(3);

  const donateVariants = ["100", "200", "500", "1 000", "2 000", "5 000"];

  function onPressFilterChip(index) {
    setCurrentSelectedItem(index);
    if (inputValueIsChanged) {
      setInputValue("");
      setInputValueIsChanged(false);
    }
  }

  return (
    <>
      <View style={styles.inputAndLabel}>
        <LabelSemiBold>Введіть Суму</LabelSemiBold>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.currencyText]}
            value={
              inputValueIsChanged
                ? inputValue
                : donateVariants[currentSelectedItem]
            }
            onChangeText={setInputValue}
            placeholderTextColor={COLORS.primary}
            textAlign='center'
            keyboardType='numeric'
            onFocus={() => setInputValueIsChanged(true)}
            onBlur={() => inputValue === "" && setInputValueIsChanged(false)}
          />
          <Text style={styles.currencyText}> грн</Text>
        </View>
      </View>
      <View style={styles.donateVariants}>
        <View style={styles.divider} />
        <View style={styles.chipsContainer}>
          {donateVariants.map((item, index) => {
            let isChecked =
              currentSelectedItem === index && !inputValueIsChanged
                ? true
                : false;
            return (
              <FilterChip
                key={index}
                isChecked={isChecked}
                onPressVariant={() => onPressFilterChip(index)}
                removeCheckIcon
              >
                {`${item} грн`}
              </FilterChip>
            );
          })}
        </View>
        <View style={styles.divider} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputAndLabel: {
    marginTop: 110,
    width: "100%",
    alignItems: "center",
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  input: {
    height: 100,
  },
  currencyText: {
    alignSelf: "center",
    fontSize: 40,
    fontFamily: "FixelDisplay-SemiBold",
    color: COLORS.primary,
  },

  donateVariants: {
    paddingTop: 24,
    justifyContent: "space-between",
    gap: 24,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 24,
    columnGap: 16,
  },
  divider: {
    backgroundColor: COLORS.outline,
    height: 1,
  },
});

export default DonateInput;
