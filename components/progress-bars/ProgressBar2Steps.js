import { Animated, Button, StyleSheet, View, Easing } from "react-native";
import { useLayoutEffect } from "react";
import { COLORS } from "../../constants/colors";

const ProgressBar2Steps = ({ start }) => {
  let progress = new Animated.Value(0);
  let lastCircleColorValue = new Animated.Value(0);
  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  const circleColor = lastCircleColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.backgroundVariant, COLORS.primary],
    extrapolate: "clamp",
  });

  useLayoutEffect(() => {
    function Start() {
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 100,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(lastCircleColorValue, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();
    }
    if (start) Start();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.line} />
        <Animated.View style={[styles.activeLine, { width: width }]} />
        <View style={styles.circlesContainer}>
          <View style={[styles.circle, styles.activeCircle]} />
          <Animated.View
            style={[
              styles.circle,
              {
                backgroundColor: COLORS.primary,
              },
            ]}
          />
        </View>
      </View>
    </>
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
    ...StyleSheet.absoluteFillObject,
    top: 6,
  },
  activeLine: {
    height: 4,
    backgroundColor: COLORS.primary,
    ...StyleSheet.absoluteFillObject,
    top: 6,
  },
  circlesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: COLORS.backgroundVariant,
    borderRadius: 8,
  },

  activeCircle: {
    backgroundColor: COLORS.primary,
  },
});

export default ProgressBar2Steps;
