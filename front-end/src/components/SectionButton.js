import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

export function SectionButton(props) {
  return (
    <>
      {true ? (
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: colors.gray_2 }}
        >
          <Text style={styles.text}>{props.title}</Text>
          <Ionicons
            name="checkmark-circle-outline"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: colors.gray_1 }}
        >
          <Text style={styles.text}>{props.title}</Text>
          <Ionicons name="close-outline" size={30} color={colors.alert} />
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 30,
    height: 60,
    width: 350,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "left",
  },
});
