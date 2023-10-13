import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const IconButton = ({ icon, onPress, variantColor }) => {
  return (
    <Pressable
      style={[styles.container, variantColor ? styles.variantColor : null]}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        color={
          variantColor ? COLORS.onBackgroundVariant : COLORS.onPrSecTertErr
        }
        size={24}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: 44,
    height: 44,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  variantColor: {
    backgroundColor: COLORS.backgroundVariant,
  },
});

export default IconButton;
