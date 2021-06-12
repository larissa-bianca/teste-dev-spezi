import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function FormButton(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
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
