import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.todoWrapper}>
          <Text style={styles.sectionTitle}>Todo List</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <Task
                key={index}
                text={item}
                onDelete={() => handleDeleteTask(index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecded5',
  },
  todoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#865c4e',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f6ae63',
    borderRadius: 60,
    borderColor: '#865c4e',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#f6ae63',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#865c4e',
    borderWidth: 2,
  },
  addText: {
    fontSize: 30,
  }
});