import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body14 = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelText-regular",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Body14;
