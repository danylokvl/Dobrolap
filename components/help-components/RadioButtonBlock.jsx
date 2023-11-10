import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import LabelSemiBold from "../typography/LabelSemiBold";
import { COLORS } from "../../constants/colors";

const RadioButtonBlock = ({ children, chosen, onPress }) => {
  const [isPressed, setisPressed] = useState(false);
  return (
    <Pressable
      style={[
        styles.container,
        chosen && styles.chosenItem,
        isPressed && styles.presssed,
      ]}
      onPress={onPress}
      onPressIn={() => setisPressed(true)}
      onPressOut={() => setisPressed(false)}
      android_ripple={true}
    >
      <View style={styles.container__iconAndLabel}>
        <MaterialCommunityIcons
          name={chosen ? "credit-card" : "credit-card-outline"}
          color={
            chosen ? COLORS.onSecondaryContainer : COLORS.onBackgroundVariant
          }
          size={24}
        />
        <LabelSemiBold
          color={
            chosen ? COLORS.onSecondaryContainer : COLORS.onBackgroundVariant
          }
        >
          {children}
        </LabelSemiBold>
      </View>

      <MaterialCommunityIcons
        name={chosen ? "radiobox-marked" : "radiobox-blank"}
        color={
          chosen ? COLORS.onSecondaryContainer : COLORS.onBackgroundVariant
        }
        size={24}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.backgroundVariant,
    elevation: 2,
  },
  container__iconAndLabel: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },

  chosenItem: {
    backgroundColor: COLORS.secondaryContainer,
  },

  presssed: {
    elevation: 1,
  },
});

export default RadioButtonBlock;
