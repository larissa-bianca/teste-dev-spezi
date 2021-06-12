import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";

export function ProgressBar(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 5,
          backgroundColor: colors.gray_3,
          borderRadius: 15,
          width: 300,
        }}
      >
        <View
          style={{
            position: "relative",
            height: "100%",
            color: colors.white,
            backgroundColor: colors.primary,
            borderRadius: 15,
            overflow: "hidden",
            padding: 3,
            color: "white",
            textAlign: "right",
            width: `${props.percent}%`,
          }}
        ></View>
      </View>
      <Text
        style={{
          textAlign: "right",
          color: colors.white,
          fontSize: 12,
          marginHorizontal: 10,
        }}
      >{`${props.percent}%`}</Text>
    </View>
  );
}
