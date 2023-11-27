import { View, StyleSheet, Text, Image } from "react-native";
import { useState } from "react";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TextButton from "../../components/buttons/TextButton";
import LoginForm from "../../components/auth-forms/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.logo}>добролап</Text>
      <Text style={styles.textUnderLogo}>Додаток Небайдужих</Text>
      <View style={styles.screen}>
        <LoginForm />
        <View style={styles.buttonsContainer}>
          <PrimaryButton>Вхід</PrimaryButton>
          <TextButton onPress={() => navigation.navigate("Sign Up 1")}>
            Реєстрація
          </TextButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,

    justifyContent: "center",
  },
  logo: {
    paddingTop: 52,
    color: COLORS.primary,
    marginBottom: 4,
    fontSize: 36,
    fontFamily: "FixelDisplay-Medium",
    letterSpacing: 5,
    textAlign: "center",
    marginBottom: 8,
  },

  textUnderLogo: {
    textAlign: "center",
    fontFamily: "FixelDisplay-Medium",
    letterSpacing: 1,
    fontSize: 12,
    color: COLORS.onBackground,
  },

  buttonsContainer: {
    alignItems: "center",
    paddingTop: 100,
    gap: 32,
  },
});

export default LoginScreen;
