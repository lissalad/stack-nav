import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Stars from "./Stars";
import { useLayoutEffect } from "react";

export default function DogDetails({ route, navigation }) {
  const { dog } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: dog.breed,
    });
  }, [dog]);

  function traitItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.traitName}>{item}</Text>
        <Stars rating={dog[item]} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={Object.keys(dog).filter((key) => key !== "breed")}
          renderItem={traitItem}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
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

  item: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 1,
    borderColor: "#9999",
  },

  traitName: {
    fontSize: 20,
    fontWeight: 500,
  },
});
