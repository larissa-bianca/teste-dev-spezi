import React from "react";

import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../styles/colors";
import { RadioButton } from "./RadioButton";
const options = [
  {
    key: "yes",
    text: "Sim",
  },
  {
    key: "no",
    text: "Não",
  },
  {
    key: "maybe",
    text: "Talvez",
  },
];

export function MultipleQuestion({ title }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  const onSubmit = () => {
    console.log(selectedOption);
  };

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <RadioButton
        options={options}
        selectedOption={selectedOption}
        onSelect={onSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    paddingVertical: 10,
  },
});
