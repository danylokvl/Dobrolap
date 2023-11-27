import { View, StyleSheet } from "react-native";
import { useState } from "react";

import LabelSemiBold from "../typography/LabelSemiBold";
import CheckListItem from "../checklist-components/CheckListItem";
import Body14 from "../typography/Body14";
import RadioButtonsList from "../RadioButtonsList";
import AuthInput from "../AuthInput";

const SignUp4Form = () => {
  const [inputsData, setInputsData] = useState({
    profession: "Ваша професія (необов'язково)",
    additionalInfo: "Напишіть про себе (необов'язково)",
  });

  return (
    <View style={styles.form}>
      <View style={styles.form__item}>
        <LabelSemiBold>Діяльність</LabelSemiBold>
        <CheckListItem chosenByDefault>Волонтер</CheckListItem>
        <CheckListItem>Ветеринар</CheckListItem>
        <CheckListItem>Юрист</CheckListItem>
      </View>
      <View style={styles.form__item}>
        <LabelSemiBold>Мови</LabelSemiBold>
        <CheckListItem chosenByDefault>Українська</CheckListItem>
        <CheckListItem>Російська</CheckListItem>
        <CheckListItem>Англійська</CheckListItem>
        <CheckListItem>Інша</CheckListItem>
      </View>
      <View style={styles.form__item}>
        <LabelSemiBold>Транспорт</LabelSemiBold>
        <Body14>Чи маєте ви водійські права?</Body14>
        <RadioButtonsList />
        <Body14>Чи є у вас автомобіль?</Body14>
        <RadioButtonsList />
      </View>
      <View style={styles.form__item}>
        <LabelSemiBold>Освіта</LabelSemiBold>
        <Body14>Який ваш рівень освіти?</Body14>
        <RadioButtonsList renderEducationLevelsList />
      </View>
      <View style={styles.form__item}>
        <LabelSemiBold>Професія</LabelSemiBold>
        <AuthInput
          value={inputsData.profession}
          onChangeText={(writtenProfession) =>
            setInputsData((prevState) => {
              return {
                ...prevState,
                profession: writtenProfession,
              };
            })
          }
          onFocus={() =>
            inputsData.profession === "Ваша професія (необов'язково)" &&
            setInputsData((prevState) => {
              return { ...prevState, profession: "" };
            })
          }
          onBlur={() =>
            inputsData.profession === "" &&
            setData((prevState) => {
              return {
                ...prevState,
                profession: "Ваша професія (необов'язково)",
              };
            })
          }
        />
      </View>
      <View style={styles.form__item}>
        <LabelSemiBold>Додаткова інформація</LabelSemiBold>
        <AuthInput
          additionalStyles={{ paddingBottom: 300 }}
          multiline
          value={inputsData.additionalInfo}
          onChangeText={(writtenAdditionalInfo) =>
            setInputsData((prevState) => {
              return {
                ...prevState,
                additionalInfo: writtenAdditionalInfo,
              };
            })
          }
          onFocus={() =>
            inputsData.additionalInfo === "Напишіть про себе (необов'язково)" &&
            setInputsData((prevState) => {
              return { ...prevState, additionalInfo: "" };
            })
          }
          onBlur={() =>
            inputsData.additionalInfo === "" &&
            setInputsData((prevState) => {
              return {
                ...prevState,
                additionalInfo: "Напишіть про себе (необов'язково)",
              };
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
  },

  form__item: {
    rowGap: 24,
    marginBottom: 40,
  },
});

export default SignUp4Form;
