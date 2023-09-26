import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const Body16 = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.onBackground,
    fontFamily: "fixelText-regular",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Body16;