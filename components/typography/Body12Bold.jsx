import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body12Bold = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelText-Bold",
    fontSize: 12,
  },
});

export default Body12Bold;
