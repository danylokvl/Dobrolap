import { View, StyleSheet } from "react-native";
import IconButton from "./buttons/IconButton";
import Headline from "./typography/Headline";
import ProgressBar2Steps from "./progress-bars/ProgressBar2Steps";

const TopAppNavigation = ({
  navigation,
  additionalButton1,
  additionalButton2,
  headline,
  add2StepsProgressBar,
}) => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.labelAndButtons}>
        <IconButton icon='arrow-left' onPress={() => navigation.goBack()} />
        <View style={styles.additionalButtons}>
          {additionalButton1 ? <IconButton icon={additionalButton1} /> : null}
          {additionalButton2 ? <IconButton icon={additionalButton2} /> : null}
        </View>
      </View>
      {add2StepsProgressBar ? (
        <View style={styles.progressBarContainer}>
          <ProgressBar2Steps />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    position: "absolute",
    top: 40,
    zIndex: 10,
    paddingHorizontal: 16,
    width: "100%",
  },

  labelAndButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressBarContainer: {
    marginTop: 28,
  },

  additionalButtons: {
    flexDirection: "row",
    gap: 16,
  },
});

export default TopAppNavigation;
