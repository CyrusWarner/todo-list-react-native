import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import ICON from 'react-native-vector-icons/MaterialIcons';
const colors = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([
    {id: 1, task: 'First todo', completed: true},
    {id: 2, task: 'Second todo', completed: false},
  ]);
  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: colors.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity style={[styles.actionIcon]} onPress={() => markTodoComplete(todo?.id)}>
            <ICON name="done" size={20} color={colors.white}></ICON>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.actionIcon, {backgroundColor: 'red'}]} onPress={() => deleteTodo(todo?.id)}>
          <ICON name="delete" size={20} color={colors.white}></ICON>
        </TouchableOpacity>
      </View>
    );
  };
  const addTodo = () => {
    if(textInput == ""){
      Alert.alert('Error', 'Please input a task name for the todo');
    }
    else{
      let newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput("");
    }

  };
  const markTodoComplete = (todoId) => {
    const newTodos = todos.map((item) => {
      if(item.id == todoId){
        return {...item, completed: true};
      }
      return item;
    })
    setTodos(newTodos)
  }

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(item => item.id != todoId);
    setTodos(newTodos);
  } 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: colors.primary}}>
          TODO APP
        </Text>
        <ICON name="delete" size={25} color="red"></ICON>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={textInput}
            onChangeText={text => setTextInput(text)}></TextInput>
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <ICON name="add" color={colors.white} size={30}></ICON>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  listItem: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
