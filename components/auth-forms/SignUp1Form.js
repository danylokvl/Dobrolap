import { View, StyleSheet } from "react-native";
import { useState } from "react";

import AuthInput from "../AuthInput";

const SignUp1Form = () => {
  const [data, setData] = useState({
    email: "Ваш Email",
    password: "Пароль",
    confirmPassword: "Підтвердіть Пароль",
  });
  return (
    <View style={styles.signUp1Form}>
      <AuthInput
        value={data.email}
        onChangeText={(email) =>
          setData((prevState) => {
            return {
              ...prevState,
              email: email,
            };
          })
        }
        onFocus={() =>
          data.email === "Ваш Email" &&
          setData((prevState) => {
            return { ...prevState, email: "" };
          })
        }
        onBlur={() =>
          data.email === "" &&
          setData((prevState) => {
            return { ...prevState, email: "Ваш Email" };
          })
        }
      />

      <AuthInput
        value={data.password}
        onChangeText={(password) =>
          setData((prevState) => {
            return { ...prevState, password: password };
          })
        }
        onFocus={() =>
          data.password === "Пароль" &&
          setData((prevState) => {
            return { ...prevState, password: "" };
          })
        }
        onBlur={() =>
          data.password === "" &&
          setData((prevState) => {
            return { ...prevState, password: "Пароль" };
          })
        }
      />
      <AuthInput
        value={data.confirmPassword}
        onChangeText={(confirmPassword) =>
          setData((prevState) => {
            return { ...prevState, confirmPassword: confirmPassword };
          })
        }
        onFocus={() =>
          data.confirmPassword === "Підтвердіть Пароль" &&
          setData((prevState) => {
            return { ...prevState, confirmPassword: "" };
          })
        }
        onBlur={() =>
          data.confirmPassword === "" &&
          setData((prevState) => {
            return { ...prevState, confirmPassword: "Підтвердіть Пароль" };
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1Form: {
    paddingTop: 24,
    gap: 32,
  },
});

export default SignUp1Form;
