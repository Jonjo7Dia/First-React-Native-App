import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);
  function goalInputHandler(e) {
    setEnteredGoalText(e);
  }

  function addGoalHandler() {
    setListOfGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} goalText={goalInputHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} />
            );
          }}
          keyExtractor={(item,index) => {
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
