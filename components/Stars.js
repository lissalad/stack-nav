import { StyleSheet, Text, View } from "react-native";

export default function Stars({ rating }) {
  const rate = Math.floor(rating);
  const stars = Array(rate).fill("⭐️");

  return (
    <View style={styles.stars}>
      {stars.map((star, index) => (
        <Text key={index}>{star}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    display: "flex",
    flexDirection: "row",
  },
});
