import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Headline = ({ children, color, additionalStyles }) => {
  return (
    <Text style={[styles.textStyle, { color: color }, { ...additionalStyles }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "FixelDisplay-Bold",
    fontSize: 24,
    alignSelf: "center",
  },
});

export default Headline;
