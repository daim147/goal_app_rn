import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Goal from "./Goal";

const Goals = function (props) {
  return (
    <View style={styles.goals}>
      <FlatList
        // keyExtractor={(item, index)=> item?.key || item?.id}
        showsVerticalScrollIndicator={false}
        data={props.goals}
        renderItem={({ item }) => (
          <Goal
            deleteGoal={() =>
              props.setGoals((goals) =>
                goals.filter((goal) => goal.key !== item.key)
              )
            }
            goal={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goals: {
    paddingVertical: 20,
  },
});

export default React.memo(Goals);
