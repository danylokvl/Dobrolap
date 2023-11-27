import { ScrollView, StyleSheet } from "react-native";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import SignUp4Form from "../../components/auth-forms/SignUp4Form";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const SignUp4Screen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.screen} style={{ flex: 1 }}>
      <Headline color={COLORS.primary}>Реєстрація</Headline>
      <SignUp4Form />
      <PrimaryButton>Завершити</PrimaryButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 16,
    rowGap: 40,
  },
});

export default SignUp4Screen;
