import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import DonateInput from "../../components/help-components/DonateInput";

const DonateScreen = () => {
  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}>Внесення Коштів</Headline>
      <DonateInput />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 46,
  },
});

export default DonateScreen;
