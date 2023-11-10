import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body12 = ({ children, color, bold }) => {
  return (
    <Text
      style={[styles.textStyle, { color: color }, bold && styles.boldStyle]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelText-Regular",
    fontSize: 12,
  },

  boldStyle: {
    fontFamily: "FixelText-Bold",
  },
});

export default Body12;
