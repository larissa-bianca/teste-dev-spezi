import React, { useEffect, useState } from "react";

import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../styles/colors";

export function TextQuestion({ title }) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} multiline={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    paddingVertical: 10,
  },
  input: {
    height: 100,
    borderWidth: 1,
    backgroundColor: colors.white,
    padding: 10,
    textAlignVertical: "top",
  },
});
