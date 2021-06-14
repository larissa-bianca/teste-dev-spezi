import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { SectionButton } from "../components/SectionButton";
import { ProgressBar } from "../components/ProgressBar";

import colors from "../styles/colors";
import api from "../services/api";

export function Form({ navigation, route }) {
  const [percent, setPercent] = useState(80);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = route.params;

  useEffect(() => {
    fetch(api + "/sections")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SectionButton title={item.title} complete={true} />
          )}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Seção")}
      >
        <Text>Enviar Formulário</Text>
      </TouchableOpacity>
      <View style={styles.bottomBar}>
        <ProgressBar percent={percent} />
      </View>
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
  list: {
    alignSelf: "center",
    marginTop: 80,
  },
});
