import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/colors";

const HelpVariantCard = ({ children, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={
        isPressed
          ? [styles.variantContainer, styles.variantContainerPressed]
          : styles.variantContainer
      }
    >
      <Text
        style={
          isPressed
            ? [styles.textStyle, styles.textStylePressed]
            : styles.textStyle
        }
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "FixelDisplay-Bold",
    fontSize: 18,
    color: COLORS.onPrimaryContainer,
    zIndex: 10,
  },

  textStylePressed: {
    color: COLORS.onPrSecTertErr,
  },

  variantContainer: {
    height: 130,
    width: "100%",
    backgroundColor: COLORS.primaryContainer,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
    shadowColor: COLORS.shadowColor,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
  },

  variantContainerPressed: {
    backgroundColor: COLORS.primary,
    elevation: 3,
  },
});

export default HelpVariantCard;
