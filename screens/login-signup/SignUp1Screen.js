import { View, StyleSheet } from "react-native";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import SignUp1Form from "../../components/auth-forms/SignUp1Form";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const SignUp1Screen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}>Реєстрація</Headline>
      <View style={styles.content}>
        <SignUp1Form />
      </View>
      <PrimaryButton onPress={() => navigation.navigate("Sign Up 2")}>
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignUp1Screen;
