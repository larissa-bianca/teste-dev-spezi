import React from "react";

import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../styles/colors";

export function Input(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      keyboardType={props.keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    backgroundColor: colors.white,
    padding: 10,
    textAlignVertical: "top",
  },
});
