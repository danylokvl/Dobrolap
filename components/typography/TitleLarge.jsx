import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const TitleLarge = ({ children, centered, color }) => {
  return (
    <Text
      style={[
        styles.textStyle,
        { color: color },
        centered && styles.textCentered,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-Medium",
    fontSize: 22,
    lineHeight: 24,
  },

  textCentered: {
    textAlign: "center",
  },
});

export default TitleLarge;
