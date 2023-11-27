import { View, StyleSheet } from "react-native";
import { useState } from "react";

import AuthInput from "../AuthInput";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "Email",
    password: "Пароль",
  });

  return (
    <View style={styles.loginForm}>
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
          data.email === "Email" &&
          setData((prevState) => {
            return { ...prevState, email: "" };
          })
        }
        onBlur={() =>
          data.email === "" &&
          setData((prevState) => {
            return { ...prevState, email: "Email" };
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
        secureTextEntry={data.password === "Пароль" ? false : true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    paddingTop: 24,
    gap: 32,
  },
});

export default LoginForm;
