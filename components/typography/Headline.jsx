import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Headline = ({ children, color }) => {
  return <Text style={[styles.textStyle, { color: color }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-Bold",
    fontSize: 24,
  },
});

export default Headline;
