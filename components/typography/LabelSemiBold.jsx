import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelSemiBold = ({ children, color }) => {
  return <Text style={[styles.textStyle, { color: color }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-SemiBold",
    fontSize: 16,
  },
});

export default LabelSemiBold;
