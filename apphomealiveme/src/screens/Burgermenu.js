import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Addremovedevice from "../components/Addremovedevice";
import Addremoverooms from "../components/Addremoverooms";
import Reboot from "../components/Reboot";
import Shutdown from "../components/Shutdown";

function Burgermenu(props) {
  return (
    <View style={styles.container}>
      <Addremovedevice style={styles.materialButtonLight}></Addremovedevice>
      <Addremoverooms style={styles.materialButtonLight2}></Addremoverooms>
      <Reboot style={styles.materialButtonLight3}></Reboot>
      <Shutdown style={styles.materialButtonLight4}></Shutdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonLight: {
    width: 640,
    height: 100
  },
  materialButtonLight2: {
    width: 640,
    height: 100
  },
  materialButtonLight3: {
    width: 640,
    height: 100
  },
  materialButtonLight4: {
    width: 640,
    height: 100
  }
});

export default Burgermenu;
