import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body16 = ({ children, color, additionalStyles }) => {
  return (
    <Text
      style={[
        styles.textStyle,
        { color: color },
        additionalStyles && { ...additionalStyles },
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelText-Regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.25,
  },
});

export default Body16;
