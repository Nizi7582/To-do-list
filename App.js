import React, { useState } from "react";
import Dialog from "react-native-dialog";
import { StyleSheet, View, Image, Text, Alert, Button } from "react-native";
import CardToDo from "./components/CardToDo({toDo}).jsx";
import TabBottomMenu from "./components/TabBottomMenu"; // Correct import path
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const TODO_LIST = [
  { id: 1, title: "Sortir le chien", isCompleted: true },
  { id: 2, title: "Aller chez le garagiste", isCompleted: false },
  { id: 3, title: "Faire les courses", isCompleted: true },
  { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
  { id: 5, title: "Sortir le chien", isCompleted: true },
  { id: 6, title: "Aller chez le garagiste", isCompleted: false },
  { id: 7, title: "Faire les courses", isCompleted: true },
  { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
];

export default function App() {
  const [toDoList, setToDoList] = useState(TODO_LIST);
  const [selectedTabName, setSelectedTabName] = useState("all"); // Initialize selectedTabName
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState(""); // New state for the input value

  const updateTodo = (todoId) => {
    const updatedTodoList = toDoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setToDoList(updatedTodoList);
  };
  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return toDoList;
      case "inProgress":
        return toDoList.filter((todo) => !todo.isCompleted);
      case "done":
        return toDoList.filter((todo) => todo.isCompleted);
      default:
        return toDoList;
    }
  }

  function deleteTodo(todoToDelete) {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          // Handle deletion logic here
          console.log(`Deleting todo with ID: ${todoToDelete}`);
          const updatedTodoList = toDoList.filter(
            (todo) => todo.id !== todoToDelete
          );
          setToDoList(updatedTodoList);
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }

  function showAddDialog() {
    setIsAddDialogVisible(true);
    }
    function addTodo() {
    const newTodo = {
    id: uuid.v4(),
    title: inputValue,
    isCompleted: false,
    };
    setToDoList([...toDoList, newTodo]);
    setIsAddDialogVisible(false);
  }
    

  const filteredList = getFilteredList();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerElements}> 
            <Image
              source={require("./assets/img/logo.png")}
              style={{ height: 50, width: 150, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 30, color: "gray" }}>Liste des tâches</Text>
          </View>
          <View style={styles.headerButton}>
            <Button title="+"></Button>
          </View>
        </View>
        <View style={styles.body}>
          {filteredList.map((todo) => (
            <CardToDo
              key={todo.id}
              toDo={todo}
              onPress={updateTodo}
              onLongPress={() => deleteTodo(todo.id)}
            />
          ))}
        </View>
        <View style={styles.footer}>
          <TabBottomMenu
            onPress={setSelectedTabName}
            selectedTabName={selectedTabName}
          />
        </View>

      </SafeAreaView>


      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => setIsAddDialogVisible(false)}
      >
        <Dialog.Title>Créer une tâche</Dialog.Title>
        <Dialog.Description>
          Choisi un nom pour la nouvelle tâche
        </Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label="Créer"
          onPress={addTodo}
        />
      </Dialog.Container>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerElements: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  headerButton: {
    flex: 0.1,
    flexDirection: 'column',
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    borderRadius: 30,
  },
  body: {
    flex: 5,
    width: "auto",
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  footer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 412,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});
