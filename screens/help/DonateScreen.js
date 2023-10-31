import { View, StyleSheet } from "react-native";
import Headline from "../../components/typography/Headline";
import ProgressBar from "../../components/ProgressBar";

const DonateScreen = () => {
  return (
    <View style={styles.screen}>
      <ProgressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DonateScreen;
