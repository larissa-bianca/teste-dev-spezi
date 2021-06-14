import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { FormButton } from "../components/FormButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";
import api from "../services/api";

export function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api + "/forms/.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FormButton
              title={item.title}
              callback={() =>
                navigation.navigate("Formulários", { params: item })
              }
            />
          )}
        />
      )}
      <TouchableOpacity
        style={styles.bottomBar}
        activeOpacity={1}
        onPress={() => navigation.navigate("Novo Formulário")}
      >
        <Ionicons name="md-add-circle" size={32} color="white" />
      </TouchableOpacity>
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
  list: {
    alignSelf: "center",
    marginTop: 80,
  },
  bottomBar: {
    backgroundColor: colors.gray_2,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
