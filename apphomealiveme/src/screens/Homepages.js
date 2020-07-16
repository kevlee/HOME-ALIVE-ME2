import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import Menu from "../components/Menu";
import Myhome from "../components/Myhome";
import Stats from "../components/Stats";
import Lockall from "../components/Lockall";

 const screenWidth = Math.round(Dimensions.get('window').width);
 const screenHeight = Math.round(Dimensions.get('window').height);


function Homepages(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="stretch"
        style={styles.image}
      >
        <Menu style={styles.materialButtonTransparentHamburger1}></Menu>
        <View style={styles.myhomeRow}>
          <Myhome style={styles.myhome}></Myhome>
          <Stats style={styles.Stats}></Stats>
          <Lockall style={styles.Lockall}></Lockall>
        </View>
        <Image
          source={require("../assets/images/ICON.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },

  myhomeRow: {
    height: '30%',
    marginTop: 200,
    marginLeft: 152,
    marginRight: 307,
    flexDirection: 'raw',
    justifyContent: 'space-between'
  },

  '@media (max-width: 400)': {
    myhomeRow: {
      //display: 'flex',
      //flexFlow: 'row nowrap',
    }
  },

  myhome: {
    width: 200,
    height: 150,
    position: "relative",
    float: "left"
  },
  Stats: {
    width: 200,
    height: 150,
    Left: 30,
    position: "relative",
    float: "left"
  },

  Lockall: {
    width: 200,
    height: 150,
    Left: 30,
    position: "relative",
    float: "left"
  },

  materialButtonTransparentHamburger1: {
    width: '5%',
    height: '5%',
    marginTop: '2%',
    marginLeft: '90%',
    position: "relative"
  },

  image2: {
    width: '20%',
    height: '20%',
    marginLeft: '80%',
  }
});

export default Homepages;
