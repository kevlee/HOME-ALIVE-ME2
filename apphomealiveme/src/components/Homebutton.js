import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Homebutton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="share-variant" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 24,
    alignSelf: "center",
    height: 24,
    width: 24,
    marginTop: 100063,
    marginLeft: 50063
  }
});

export default Homebutton;
