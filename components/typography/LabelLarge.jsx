import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelLarge = ({ children, color, additionalStyles }) => {
  return (
    <Text style={[styles.textStyle, { color: color }, additionalStyles]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-Medium",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default LabelLarge;
