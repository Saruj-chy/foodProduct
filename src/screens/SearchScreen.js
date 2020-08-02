import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

import SearchBar from '../components/SearchBar';


const BoxScreen = () => {

  const [term, setTerm] = useState('');

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submit")}
      />
      <Text>Search Screen also </Text>
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default BoxScreen;