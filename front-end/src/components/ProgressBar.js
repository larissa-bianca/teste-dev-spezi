import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";

export function ProgressBar({ percent }) {
  return (
    <View style={styles.bar}>
      <View
        style={{
          height: 5,
          backgroundColor: colors.gray_3,
          borderRadius: 15,
          width: 300,
        }}
      >
        <View style={{ ...styles.progress, width: `${percent}%` }}></View>
      </View>
      <Text style={styles.percent}>{`${percent}%`}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  progress: {
    position: "relative",
    height: "100%",
    color: colors.white,
    backgroundColor: colors.primary,
    borderRadius: 15,
    overflow: "hidden",
    padding: 3,
    color: "white",
    textAlign: "right",
  },
  percent: {
    textAlign: "right",
    color: colors.white,
    fontSize: 12,
    marginHorizontal: 10,
  },
});
