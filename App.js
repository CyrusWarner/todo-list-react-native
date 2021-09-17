import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ICON from 'react-native-vector-icons/MaterialIcons';
const colors = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, task: 'First todo', completed: true},
    {id: 2, task: 'Second todo', completed: false},
  ]);
  const ListItem = ({todo}) => {
    return <View style={styles.listItem}>
      <View><Text>{todo?.task}</Text></View>
    </View>
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
      renderItem={({item}) => <ListItem todo={item} />} />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Add Todo"></TextInput>
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <ICON name="add" color={colors.white} size={30}></ICON>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
