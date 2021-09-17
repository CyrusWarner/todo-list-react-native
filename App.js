
import React from 'react';

import {SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import ICON from "react-native-vector-icons/MaterialIcons";
const colors = {primary: "#1f145c", white: "#fff"};

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: colors.white}}>
      <View style={styles.header}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: colors.primary}}>TODO APP</Text>
        <ICON name="delete" size={25} color="red"></ICON>
      </View>
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
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: "absolute",
    bottom: 0,
    color: colors.white,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: 20
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 25, 
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default App;
