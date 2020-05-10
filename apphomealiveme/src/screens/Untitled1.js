import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Plusmoins from "../components/Plusmoins";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background2.png")}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.rectStackStack}>
          <View style={styles.rectStack}>
            <View style={styles.rect}></View>
            <Plusmoins style={styles.cupertinoStepper}></Plusmoins>
          </View>
          <View style={styles.rect1}></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 1923,
    height: 1087,
    marginTop: -10,
    marginLeft: -3
  },
  image_imageStyle: {},
  rect: {
    top: 0,
    left: 0,
    width: 740,
    height: 790,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  cupertinoStepper: {
    top: 313,
    left: 717,
    width: 134,
    height: 129,
    position: "absolute"
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 851,
    height: 790,
    position: "absolute"
  },
  rect1: {
    top: 0,
    left: 840,
    width: 740,
    height: 790,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  rectStackStack: {
    width: 1580,
    height: 790,
    marginTop: 157,
    marginLeft: 146
  }
});

export default Untitled1;
