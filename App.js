import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setListOfGoals((prevState) => [
      ...prevState,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setListOfGoals((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 3,
  },
});
