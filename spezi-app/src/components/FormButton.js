import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function FormButton({ title, callback }) {
  return (
    <TouchableOpacity style={styles.button} onPress={callback}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#282828",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 30,
    height: 60,
    width: 350,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    textAlign: "left",
  },
});
