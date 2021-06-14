import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { Formik } from "formik";

import colors from "../styles/colors";
import api from "../services/api";

export function FormCreate({ navigation, route }) {
  const [percent, setPercent] = useState(80);

  const params = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          id: "",
          title: " ",
          created_at: "2021-06-07T18:49:43.051Z",
          updated_at: "2021-06-07T18:49:43.051Z",
          url: " ",
        }}
        onSubmit={(values) => {
          fetch(api + "/forms", {
            method: "POST",
            body: JSON.stringify({
              id: parseInt(values.id),
              title: values.title,
              created_at: "2021-06-07T18:49:43.051Z",
              updated_at: "2021-06-07T18:49:43.051Z",
              url: values.url,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .catch((error) => console.error(error));

          navigation.navigate("Home");
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              name="id"
              placeholder="Id"
              value={values.id}
              onChangeText={handleChange("id")}
              keyboardType="numeric"
            />
            <Input
              name="title"
              placeholder="Título do Form"
              value={values.title}
              onChangeText={handleChange("title")}
            />

            <Text style={styles.text}>
              {(values.url = api + "/forms/" + values.id + ".json")}
            </Text>
            <View style={styles.bottomBar}>
              <Button title="Salvar" callback={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
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
  text: {
    color: colors.white,
  },
});
