import React from "react";
import { Text, StyleSheet, Button, View, TextInput } from "react-native";

import { Feather } from '@expo/vector-icons';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search..."
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        onChangeText={onTermChange}
        // onEndEditing={() => console.log("Submitted")}
        // onEndEditing={() => onTermSubmit()}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    // backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    // alignItems: 'center',
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,

  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});

export default SearchBar;