import { View, StyleSheet } from "react-native";
import { useState } from "react";

import AuthInput from "../AuthInput";
import LabelLarge from "../typography/LabelLarge";

const SignUp2Form = () => {
  const [data, setData] = useState({
    name: "Ваше Ім'я",
    surname: "Ваше Прізвище",
    city: "Місто, де ви проживаєте",
    phoneNumber: "Ваш номер телефону",
  });

  return (
    <View style={styles.signUp2Form}>
      <LabelLarge additionalStyles={{ textAlign: "center" }}>
        Персональні Дані
      </LabelLarge>
      <View style={styles.nameAndSurnameContainer}>
        <AuthInput
          additionalStyles={styles.nameAndSurnameContainer__input}
          value={data.name}
          onChangeText={(name) =>
            setData((prevState) => {
              return {
                ...prevState,
                name: name,
              };
            })
          }
          onFocus={() =>
            data.name === "Ваше Ім'я" &&
            setData((prevState) => {
              return { ...prevState, name: "" };
            })
          }
          onBlur={() =>
            data.name === "" &&
            setData((prevState) => {
              return { ...prevState, name: "Ваше Ім'я" };
            })
          }
        />
        <AuthInput
          additionalStyles={styles.nameAndSurnameContainer__input}
          value={data.surname}
          onChangeText={(surname) =>
            setData((prevState) => {
              return {
                ...prevState,
                surname: surname,
              };
            })
          }
          onFocus={() =>
            data.surname === "Ваше Прізвище" &&
            setData((prevState) => {
              return { ...prevState, surname: "" };
            })
          }
          onBlur={() =>
            data.surname === "" &&
            setData((prevState) => {
              return { ...prevState, surname: "Ваше Прізвище" };
            })
          }
        />
      </View>
      <AuthInput
        value={data.city}
        onChangeText={(city) =>
          setData((prevState) => {
            return {
              ...prevState,
              city: city,
            };
          })
        }
        onFocus={() =>
          data.city === "Місто, де ви проживаєте" &&
          setData((prevState) => {
            return { ...prevState, city: "" };
          })
        }
        onBlur={() =>
          data.city === "" &&
          setData((prevState) => {
            return { ...prevState, city: "Місто, де ви проживаєте" };
          })
        }
      />
      <AuthInput
        value={data.phoneNumber}
        keyboardType='numeric'
        onChangeText={(phoneNumber) =>
          setData((prevState) => {
            return {
              ...prevState,
              phoneNumber: phoneNumber,
            };
          })
        }
        onFocus={() =>
          data.phoneNumber === "Ваш номер телефону" &&
          setData((prevState) => {
            return { ...prevState, phoneNumber: "+38 " };
          })
        }
        onBlur={() =>
          (data.phoneNumber === "" || "+38 ") &&
          setData((prevState) => {
            return { ...prevState, phoneNumber: "Ваш номер телефону" };
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp2Form: {
    gap: 32,
  },
  nameAndSurnameContainer: {
    flexDirection: "row",
    width: "100%",
    columnGap: 8,
  },

  nameAndSurnameContainer__input: {
    width: "49%",
  },
});

export default SignUp2Form;
