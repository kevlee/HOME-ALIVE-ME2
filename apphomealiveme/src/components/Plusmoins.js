import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Plusmoins(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={[
          styles.leftStepper,
          {
            backgroundColor: props.decrement
              ? "rgba(0, 122, 255,0.1)"
              : "#FFFFFF"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="minus"
          style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightStepper,
          {
            backgroundColor: props.increment
              ? "rgba(0, 122, 255,0.1)"
              : "#FFFFFF"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="plus"
          style={styles.rightIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center"
  },
  leftStepper: {
    flex: 1,
    alignItems: "center",
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  leftIcon: {
    fontSize: 30,
    color: "#007AFF"
  },
  rightStepper: {
    height: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  rightIcon: {
    fontSize: 30,
    color: "#007AFF",
    alignSelf: "stretch"
  }
});

export default Plusmoins;
