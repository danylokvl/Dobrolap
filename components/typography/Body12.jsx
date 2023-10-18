import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body12 = ({ children, grey }) => {
  return (
    <Text style={[styles.textStyle, grey ? styles.grey : null]}>
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
  grey: {
    color: COLORS.onBackgroundVariant,
  },
});

export default Body12;
