import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { COLORS } from "../constants/colors";

const AuthInput = ({ ...props }) => {
  return (
    <View
      style={[
        styles.inputContainer,
        props.additionalStyles && { ...props.additionalStyles },
      ]}
    >
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    borderColor: COLORS.outline,
    borderWidth: 2,
  },
  input: {
    fontSize: 16,
    fontFamily: "FixelDisplay-Regular",
    width: "100%",
    height: "100%",
  },
});

export default AuthInput;
