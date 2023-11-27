import { View, StyleSheet } from "react-native";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SignUp2Form from "../../components/auth-forms/SignUp2Form";

const SignUp2Screen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}>Реєстрація</Headline>
      <SignUp2Form />
      <PrimaryButton onPress={() => navigation.navigate("Sign Up 3")}>
        Продовжити
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});

export default SignUp2Screen;
