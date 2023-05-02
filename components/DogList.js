import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { dogs, getAverageDogRating } from "../breeds";
import Stars from "./Stars";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function DogList({ navigation }) {
  const [search, setSearch] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Dogs",
    });
  }, []);

  function listItem({ item }) {
    const averageRating = getAverageDogRating(item);
    return (
      <TouchableOpacity
        style={styles.dogItem}
        onPress={() => navigation.navigate("Details", { dog: item })}
      >
        <Text style={styles.breedName}>{item.breed}</Text>
        <Stars rating={averageRating} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView>
          {/* ------- FLAT LIST ----------- */}
          <FlatList
            data={dogs.filter((item) =>
              item.breed.toLowerCase().includes(search.toLowerCase())
            )}
            renderItem={listItem}
            keyExtractor={(item) => item.index}
          />
          {/* ------------------ */}

          <TextInput
            style={styles.search}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dogItem: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 1,
    borderColor: "#9999",
  },

  breedName: {
    fontSize: 20,
    fontWeight: 500,
  },

  search: {
    fontSize: 24,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#4444",
  },

  keyboardAvoiding: {
    flex: 1,
  },
});
