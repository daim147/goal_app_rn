import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Goals from "./components/Goals";
import InputContainer from "./components/InputContainer";

export default function App() {
  const [modal, setModal] = useState(false);
  const [goals, setGoals] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Goal App</Text>
      <InputContainer modal={modal} setModal={setModal} addGoal={setGoals} />
      <View>
        <Button onPress={setModal.bind(this, true)} title="ADD" />
      </View>
      <Goals goals={goals} setGoals={setGoals} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#e4e2e2",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    marginVertical: 20,
    color: "#a9a9ac",
    fontWeight: "700",
  },
});
