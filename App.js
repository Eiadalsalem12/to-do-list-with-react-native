import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {StyleSheet, View, FlatList } from 'react-native';
import TaskItem from "./Component/TaskItem";
import TaskInput from "./Component/TaskInput";
// import Accordion from './Component/accordion/accordion';
export default function App() {
  const [TaskGoal, setTaskGoal] = useState([]);
  // const [showAlert, setShowAlert] = useState(false);

  function addGoalHandler(changeInput) {
    setTaskGoal((array) => [
      ...array, 
      {text: changeInput, key: Math.random().toString() },
    ]);
  }

  function DeleteTaskHandler(key){
    setTaskGoal(array => {
      return array.filter((goal) => goal.key !== key)
    })
  }

  return (
    
    <View style={styles.container}>
        <TaskInput onaddGoal={addGoalHandler}/>

      <View style={styles.TaskContainer}>
       <FlatList
         
       data={TaskGoal}
        renderItem={(itemData) => {
        return <TaskItem text={itemData.item.text} 
        id={itemData.item.key}
        onDeleteItem={DeleteTaskHandler}/>
       }}/>
       {/* <Accordion title='tex' content='test'/> */}
      </View>
      <StatusBar style="dark" backgroundColor='#eee' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  
  TaskContainer:{
    flex: 9
  },
 
});
