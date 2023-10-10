import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const CardChip = ({ children, icon }) => {
  return (
    <View style={styles.chip}>
      <Ionicons name={icon} size={16} color={COLORS.onPrSecTertErr} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 4,
    borderRadius: 8,
  },
  text: {
    fontFamily: "FixelText-Regular",
    fontSize: 12,
    color: COLORS.onPrSecTertErr,
  },
});

export default CardChip;
