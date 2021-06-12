import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FormButton } from "../components/FormButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FormButton title="Formulário1" />
      <FormButton title="Formulário" />
      <FormButton title="Formulário1" />
      <FormButton title="Formulário" />
      <FormButton title="Formulário1" />
      <FormButton title="Formulário" />
      <TouchableOpacity
        style={styles.bottomBar}
        activeOpacity={1}
        onPress={() => navigation.navigate("Formulários")}
      >
        <Ionicons name="md-add-circle" size={32} color="white" />
      </TouchableOpacity>
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
  bottomBar: {
    backgroundColor: colors.gray_2,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
