import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", 
  },
  imageBackground: {
    flex: 1, 
    width: "100%",
  },
  content: {
    flex: 2, 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black", 
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginTop: 10, 
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../asset/H&M.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          This is a simple description below the title.
        </Text>
      </View>
    </View>
  );
}
