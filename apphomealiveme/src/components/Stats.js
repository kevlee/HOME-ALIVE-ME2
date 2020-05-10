import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Stats(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="chart-line" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(119,181,254,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 250,
    borderColor: "#000000",
    borderWidth: 3,
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
    fontFamily: "Roboto",
    fontSize: 200,
    alignSelf: "center",
    margin: 0
  }
});

export default Stats;
