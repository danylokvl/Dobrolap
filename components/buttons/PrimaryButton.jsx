import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";
import LabelSemiBold from "../typography/LabelSemiBold";

const PrimaryButton = ({ children, inActive, onPress, icon }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonContainer,
        inActive ? styles.backgroundVariantColor : styles.primaryColor,
        isPressed && styles.pressed,
      ]}
      onPressIn={() => !inActive && setIsPressed(true)}
      onPressOut={() => setTimeout(setIsPressed, 100, false)}
    >
      {icon && (
        <MaterialCommunityIcons
          name={isPressed ? icon.replace("-outline", "") : icon}
          size={24}
          color={isPressed ? COLORS.onPrimaryContainer : COLORS.onPrSecTertErr}
        />
      )}
      <LabelSemiBold
        color={isPressed ? COLORS.onPrimaryContainer : COLORS.onPrSecTertErr}
      >
        {children}
      </LabelSemiBold>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    elevation: 10,
    gap: 8,
  },

  primaryColor: {
    backgroundColor: COLORS.primary,
  },

  backgroundVariantColor: {
    backgroundColor: COLORS.backgroundVariant,
  },

  pressed: {
    elevation: 5,
    backgroundColor: COLORS.primaryContainer,
  },
});

export default PrimaryButton;
