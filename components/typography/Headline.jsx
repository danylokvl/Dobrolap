import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Headline = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelDisplay-bold",
    fontSize: 24,
  },
});

export default Headline;
