import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task'; // Ensure that the path to Task is correct

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>

        <View style={styles.items}>
          <Task Text={'Task 1'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  todoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
});
