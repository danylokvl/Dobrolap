import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LabelSemiBold = ({ children, centered }) => {
  return (
    <Text
      style={
        centered ? [styles.textStyle, styles.textCentered] : [styles.textStyle]
      }
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

export default LabelSemiBold;
