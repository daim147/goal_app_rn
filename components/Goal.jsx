import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Goal = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.deleteGoal}>
      <View style={styles.goal}>
        <Text style={styles.goalText}>{props.goal.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "whitesmoke",
    paddingHorizontal: 5,
    borderColor: "#cacaca",
    borderWidth: 1,
  },
  goalText: {
    fontSize: 18,
  },
});

export default Goal;
