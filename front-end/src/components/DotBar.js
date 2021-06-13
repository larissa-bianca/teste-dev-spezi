import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export function DotBar() {
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          onSelect(item);
        }}
      >
        <View style={styles.checked} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          onSelect(item);
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          onSelect(item);
        }}
      />
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          onSelect(item);
        }}
      />
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          onSelect(item);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 0,
    height: 70,
    width: "100%",
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray_1,
    borderColor: colors.white,
    marginHorizontal: 10,
  },

  checked: {
    width: 8,
    height: 8,
    borderRadius: 7,
    backgroundColor: colors.white,
  },
});
