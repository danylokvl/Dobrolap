import { View, StyleSheet } from "react-native";
import Headline from "../../components/typography/Headline";
import RightArrowBlock from "../../components/help-components/RightArrowBlock";

const AlreadyHelpedScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <RightArrowBlock showPerson />
        <RightArrowBlock showPerson />
        <RightArrowBlock showPerson />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 100,
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default AlreadyHelpedScreen;
