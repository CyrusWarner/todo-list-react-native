
import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import ICON from "react-native-vector-icons/MaterialIcons";
const colors = {primary: "#1f145c", white: "#fff"};

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: colors.white}}>
      <View style={styles.header}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: colors.primary}}>TODO APP</Text>
        <ICON name="delete" size={25} color="red"></ICON>
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

  }
})

export default App;
