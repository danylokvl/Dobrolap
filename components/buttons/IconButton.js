import { Pressable, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { useState } from "react";

const IconButton = ({ icon, onPress, variantColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  let iconToRender = (
    <MaterialCommunityIcons
      name={icon}
      color={COLORS.onPrSecTertErr}
      size={24}
    />
  );
  if (variantColor)
    iconToRender = (
      <MaterialCommunityIcons
        name={icon}
        color={COLORS.onBackgroundVariant}
        size={24}
      />
    );
  else if (isPressed) {
    iconToRender = (
      <MaterialCommunityIcons
        name={icon === "bookmark-outline" ? "bookmark" : icon}
        color={COLORS.onBackgroundVariant}
        size={24}
      />
    );
  }

  return (
    <Pressable
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      style={[
        styles.container,
        variantColor ? styles.variantColor : null,
        isPressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
    >
      {iconToRender}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: 44,
    height: 44,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.shadowColor,
  },
  variantColor: {
    backgroundColor: COLORS.backgroundVariant,
  },

  buttonPressed: {
    backgroundColor: COLORS.primaryContainer,
  },
});

export default IconButton;
