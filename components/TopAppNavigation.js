import { View, StyleSheet } from "react-native";
import IconButton from "./buttons/IconButton";
import Headline from "./typography/Headline";

const TopAppNavigation = ({
  navigation,
  headline,
  additionalButton1,
  additionalButton2,
}) => {
  return (
    <View style={styles.navigationContainer}>
      <IconButton icon='arrow-left' onPress={() => navigation.goBack()} />
      <View style={{ justifySelf: "flex-end" }}>
        <Headline>{headline}</Headline>
      </View>

      <View style={styles.additionalButtons}>
        {additionalButton1 ? <IconButton icon={additionalButton1} /> : null}
        {additionalButton2 ? <IconButton icon={additionalButton2} /> : null}
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  additionalButtons: {
    flexDirection: "row",
    gap: 16,
  },
});

export default TopAppNavigation;
