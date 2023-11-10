import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body16 = ({ children, color }) => {
  return <Text style={[styles.textStyle, { color: color }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelText-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Body16;
