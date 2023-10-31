import { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.circlesContainer}>
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    height: 16,
  },
  line: {
    height: 4,
    backgroundColor: COLORS.backgroundVariant,
  },
  circlesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: COLORS.backgroundVariant,
    borderRadius: 8,
  },
});

export default ProgressBar;
