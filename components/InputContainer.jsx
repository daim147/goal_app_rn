import React, { useState } from "react";
import {
  Button,
  Modal,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

let key = 1;

const InputContainer = (props) => {
  const [text, setText] = useState("");
  return (
    <Modal
      animationType="slide"
      transparent={false}
      statusBarTranslucent={true}
      visible={props.modal}
    >
      <View style={styles.modal}>
        <TextInput
          style={styles.input}
          placeholder="Enter Goal"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={props.setModal.bind(this, false)}
              title="Cancel"
              color="red"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                if (!text.trim()) {
                  Alert.alert("Please add a valid goal");
                  return;
                }
                props.addGoal((goal) => {
                  return [...goal, { text, key: key++ }];
                });
                setText("");
                props.setModal(false);
              }}
              title="Add Goal"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    width: "100%",
  },
});

export default InputContainer;
