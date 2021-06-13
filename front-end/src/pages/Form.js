import React, { useEffect, useState } from "react";

import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SectionButton } from "../components/SectionButton";
import { ProgressBar } from "../components/ProgressBar";

import colors from "../styles/colors";

export function Form({ navigation }) {
  const [percent, setPercent] = useState(80);
  return (
    <View style={styles.container}>
      <SectionButton title="Seção" />
      <SectionButton title="Seção" />
      <SectionButton title="Seção" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Seção")}
      >
        <Text>Enviar Formulário</Text>
      </TouchableOpacity>
      <View style={styles.bottomBar}>
        <ProgressBar percent={percent} />
      </View>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 40,
    width: 200,
    position: "absolute",
    bottom: 80,
  },
  bottomBar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    height: 70,
    width: "100%",
  },
});
