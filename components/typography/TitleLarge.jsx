import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelSemiBold = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelDisplay-medium",
    fontSize: 22,
    lineHeight: 24,
  },
});

export default LabelSemiBold;
