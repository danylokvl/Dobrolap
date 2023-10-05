import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelLarge = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
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
