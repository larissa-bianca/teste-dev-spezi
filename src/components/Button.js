import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

export function Button({ title, callback }) {
  return (
    <TouchableOpacity style={styles.button} onPress={callback}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 40,
    width: 200,
  },
});
