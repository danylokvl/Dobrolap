import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const LargeFAB = (props) => {
  return (
    <Pressable style={styles.button}>
      <Ionicons name={props.icon} size={24} />
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: COLORS.primaryContainer,
    color: COLORS.onPrimaryContainer,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
    elevation: 6,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  text: {
    fontFamily: "FixelDisplay-SemiBold",
    fontSize: 16,
  },
});

export default LargeFAB;
