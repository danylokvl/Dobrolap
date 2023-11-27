import { View, StyleSheet } from "react-native";
import { useState } from "react";

import RadioButton from "./buttons/RadioButton";

const RadioButtonsList = ({ renderEducationLevelsList }) => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
  const yesNoArray = ["Так", "Ні"];
  const educationLevelsArray = [
    "Вища",
    "Незакінчена вища",
    "Загальна середня",
    "Інше",
  ];

  let arrayToRender = renderEducationLevelsList
    ? educationLevelsArray
    : yesNoArray;

  return (
    <View
      style={
        renderEducationLevelsList ? styles.containerVertical : styles.container
      }
    >
      {arrayToRender.map((item, index) => {
        let isChosen = currentSelectedItem === index ? true : false;
        return (
          <RadioButton
            key={index}
            isChosen={isChosen}
            onPress={() => setCurrentSelectedItem(index)}
          >
            {item}
          </RadioButton>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 64,
    alignItems: "center",
  },
  containerVertical: {
    flexDirection: "column",
    rowGap: 24,
  },
});

export default RadioButtonsList;
