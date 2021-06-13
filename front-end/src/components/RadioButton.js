import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export function RadioButton({ options, selectedOption, onSelect }) {
  return (
    <View>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.button}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item);
              }}
            >
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checked} />
              )}
            </TouchableOpacity>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  checked: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.gray_1,
  },
  text: {
    color: colors.white,
    marginHorizontal: 10,
  },
});
