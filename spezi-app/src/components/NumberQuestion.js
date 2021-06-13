import React from "react";

import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../styles/colors";

export function NumberQuestion({ title }) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    paddingVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});
