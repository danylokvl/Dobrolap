import { View, StyleSheet } from "react-native";
import IconButton from "./buttons/IconButton";
import BackButton from "./buttons/BackButton";
import Headline from "./typography/Headline";

const TopAppNavigation = ({ headline, rightButtonIcon }) => {
  return (
    <>
      <View style={styles.navigationContainer}>
        <BackButton />
        {rightButtonIcon ? <IconButton icon={rightButtonIcon} /> : null}
      </View>
    </>
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
});

export default TopAppNavigation;
