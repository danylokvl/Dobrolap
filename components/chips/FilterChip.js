import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";

const FilterChip = ({ children, scrollViewRef }) => {
  const [chipEnabled, setChipEnabled] = useState(false);
  return (
    <Pressable
      style={[
        styles.chip,
        styles.chipDisabledStyle,
        chipEnabled && styles.chipEnabledStyle,
      ]}
      onPress={() => {
        setChipEnabled(!chipEnabled);
        if (scrollViewRef) scrollViewRef.current.scrollToEnd();
      }}
    >
      {chipEnabled && (
        <Ionicons
          name='checkmark-sharp'
          size={18}
          color={COLORS.onSecondaryContainer}
        />
      )}
      <Text
        style={[
          styles.text,
          chipEnabled && { color: COLORS.onSecondaryContainer },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  text: {
    color: COLORS.outline,
    fontFamily: "FixelDisplay-Medium",
    fontSize: 14,
    lineHeight: 20,
  },

  chipEnabledStyle: {
    backgroundColor: COLORS.secondaryContainer,
    borderWidth: 0,
  },
  chipDisabledStyle: {
    borderWidth: 1,
    borderColor: COLORS.outline,
  },
});

export default FilterChip;
