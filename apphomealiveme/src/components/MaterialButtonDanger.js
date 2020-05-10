import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function MaterialButtonDanger(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {}
});

export default MaterialButtonDanger;
