import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { useState } from "react";

const LargeFAB = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <Ionicons
        name={props.icon}
        size={24}
        color={isPressed ? COLORS.onPrSecTertErr : COLORS.onPrimaryContainer}
      />
      <Text style={[styles.text, isPressed ? styles.textPressed : null]}>
        {props.children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: COLORS.primaryContainer,
    color: COLORS.onPrimaryContainer,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
    elevation: 8,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },

  buttonPressed: {
    backgroundColor: COLORS.primary,
    elevation: 6,
  },

  text: {
    fontFamily: "FixelDisplay-SemiBold",
    fontSize: 16,
  },

  textPressed: {
    color: COLORS.onPrSecTertErr,
  },
});

export default LargeFAB;
