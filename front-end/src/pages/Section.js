import React, { useState } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { TextQuestion } from "../components/TextQuestion";
import { NumberQuestion } from "../components/NumberQuestion";
import { MultipleQuestion } from "../components/MultipleQuestion";
import { DotBar } from "../components/DotBar";

import colors from "../styles/colors";

export function Section({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <NumberQuestion title="Questão 1" />
        <MultipleQuestion title="Questão 2" />
        <TextQuestion title="Questão 3" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Salvar</Text>
      </TouchableOpacity>
      <DotBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "90%",
    margin: 12,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray_2,
    height: 40,
    width: 200,
    position: "absolute",
    bottom: 80,
  },

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
