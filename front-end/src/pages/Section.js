import React, { useEffect, useState } from "react";

import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ProgressBar } from "../components/ProgressBar";

import colors from "../styles/colors";

export function Section({ navigation }) {
  const [percent, setPercent] = useState(75);
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Section")}
      >
        <Text>Enviar Formulário</Text>
      </TouchableOpacity>
      <View style={styles.progressBar}>
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
    backgroundColor: colors.gray_2,
    height: 40,
    width: 200,
    position: "absolute",
    bottom: 80,
  },
  progressBar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    height: 70,
    width: "100%",
  },
});
