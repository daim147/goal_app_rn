import React, { useState } from "react";
import { Button, Modal, View, StyleSheet, TextInput } from "react-native";

const InputContainer = () => {
  const [text, setText] = useState("");
  return (
    <Modal
      animationType="slide"
      transparent={false}
      statusBarTranslucent={false}
      visible={true}
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
            <Button title="Cancel" color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" />
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
