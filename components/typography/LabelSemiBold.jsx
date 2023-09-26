import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelSemiBold = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelDisplay-semiBold",
    fontSize: 16,
    lineHeight: "auto",
  },
});

export default LabelSemiBold;
