import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.test}>TEST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 711,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 149,
    marginLeft: 112
  },
  test: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 312
  }
});

export default Untitled;
