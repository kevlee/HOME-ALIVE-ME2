import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Myhome(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="home-automation" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(119,181,254,1)",
    flexDirection: "column-reverse",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 200,
    borderColor: "#000000",
    borderWidth: 3,
    borderStyle: "solid",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "rgba(228,105,46,1)",
    fontSize: 200,
    alignSelf: "center"
  }
});

export default Myhome;
