import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputContainer from "./components/InputContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tesing App</Text>
      <InputContainer />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a84242",
    alignItems: "center",
    justifyContent: "center",
  },
});
