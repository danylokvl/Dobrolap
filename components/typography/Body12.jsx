import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body12 = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelText-regular",
    fontSize: 12,
  },
});

export default Body12;
