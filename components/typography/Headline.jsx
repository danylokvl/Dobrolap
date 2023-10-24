import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Headline = ({ children, primaryColor }) => {
  return (
    <Text
      style={
        primaryColor
          ? [styles.textStyle, styles.primaryColor]
          : styles.textStyle
      }
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-Bold",
    fontSize: 24,
  },

  primaryColor: {
    color: COLORS.primary,
  },
});

export default Headline;
