import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={props.goalText}
      />
      <Button title="Add Goal" onPress={props.addGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
