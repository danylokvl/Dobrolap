import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";

const FilterChip = ({
  children,
  scrollViewRef,
  removeCheckIcon,
  isChecked,
  onPressVariant,
}) => {
  const [chipEnabled, setChipEnabled] = useState(false);
  return (
    <Pressable
      style={[
        styles.chip,
        styles.chipDisabledStyle,
        (chipEnabled || isChecked) && styles.chipEnabledStyle,
      ]}
      onPress={() => {
        if (onPressVariant) {
          onPressVariant();
        } else {
          setChipEnabled(!chipEnabled);
          if (scrollViewRef) scrollViewRef.current.scrollToEnd();
        }
      }}
    >
      {chipEnabled && !removeCheckIcon ? (
        <MaterialCommunityIcons
          name='check'
          size={18}
          color={COLORS.onSecondaryContainer}
        />
      ) : null}
      <Text
        style={[
          styles.text,
          (chipEnabled || isChecked) && { color: COLORS.onSecondaryContainer },
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
    paddingVertical: 12,
    paddingHorizontal: 18,
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
