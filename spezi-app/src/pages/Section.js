import React, { useState, useEffect } from "react";

import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { TextQuestion } from "../components/TextQuestion";
import { NumberQuestion } from "../components/NumberQuestion";
import { MultipleQuestion } from "../components/MultipleQuestion";
import { DotBar } from "../components/DotBar";

import colors from "../styles/colors";

export function Section({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.18.119:3001/api/v1/sections/1/questions")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log("lara", data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              if (item.kind === "number") {
                return <NumberQuestion title={item.title} />;
              } else if (item.kind === "text") {
                return <TextQuestion title={item.title} />;
              } else if (item.kind === "select") {
                return <MultipleQuestion title={item.title} />;
              }
            }}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Salvar</Text>
      </TouchableOpacity>
      <DotBar />
    </SafeAreaView>
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
  list: {
    flex: 1,
  },
});
