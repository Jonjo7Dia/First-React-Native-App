import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import {StatusBar} from 'expo-status-bar';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function startAddGoalHandler() {
    setShowModal(true);
  }
  function cancelAddGoalHandler(){
    setShowModal(false);
  }
  function addGoalHandler(enteredText) {
    setListOfGoals((prevState) => [
      ...prevState,
      { text: enteredText, id: Math.random().toString() },
    ]);
    cancelAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setListOfGoals((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}

      />
      <GoalInput closeModal={cancelAddGoalHandler} visible={showModal} addGoal={addGoalHandler} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 3,
  },
});
