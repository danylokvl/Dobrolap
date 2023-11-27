import { Pressable } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const Check = ({ chosenByDefault }) => {
  const [icon, setIcon] = useState({
    name: chosenByDefault ? "checkbox-marked" : "checkbox-blank-outline",
    color: chosenByDefault ? COLORS.primary : COLORS.onBackground,
  });

  function IconChange() {
    if (icon.name === "checkbox-blank-outline")
      setIcon({
        name: "checkbox-marked",
        color: COLORS.primary,
      });
    else
      setIcon({
        name: "checkbox-blank-outline",
        color: COLORS.onBackground,
      });
  }

  return (
    <Pressable
      onPressOut={() => IconChange()}
      android_ripple={{
        color: COLORS.primaryContainer,
        borderless: true,
        radius: 24,
      }}
    >
      <MaterialCommunityIcons name={icon.name} color={icon.color} size={28} />
    </Pressable>
  );
};

export default Check;
