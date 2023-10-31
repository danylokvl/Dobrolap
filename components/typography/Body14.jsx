import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body14 = ({ children, semiBold, color }) => {
  return (
    <Text
      style={[
        styles.textStyle,
        semiBold ? styles.semiBold : null,
        { color: color },
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelText-Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  semiBold: {
    fontFamily: "FixelText-SemiBold",
  },
  primaryColor: {
    color: COLORS.primary,
  },
});

export default Body14;
