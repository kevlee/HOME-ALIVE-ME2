import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Menu from "../components/Menu";
import Myhome from "../components/Myhome";
import Stats from "../components/Stats";
import Lockall from "../components/Lockall";

function Homepages(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background1.png")}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Menu style={styles.materialButtonTransparentHamburger1}></Menu>
        <View style={styles.myhomeRow}>
          <Myhome style={styles.myhome}></Myhome>
          <Stats style={styles.materialButtonShare2}></Stats>
          <Lockall style={styles.materialButtonShare3}></Lockall>
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
    flexDirection: "row"
  },
  image: {
    width: 1924,
    height: 1084,
    marginLeft: -2,
    marginTop: -1
  },
  image_imageStyle: {},
  materialButtonTransparentHamburger1: {
    width: 91,
    height: 88,
    marginTop: 37,
    marginLeft: 1785
  },
  myhome: {
    width: 350,
    height: 350
  },
  materialButtonShare2: {
    width: 350,
    height: 350,
    marginLeft: 225
  },
  materialButtonShare3: {
    width: 350,
    height: 350,
    borderRadius: 100,
    marginLeft: 190
  },
  myhomeRow: {
    height: 350,
    flexDirection: "row",
    marginTop: 200,
    marginLeft: 152,
    marginRight: 307
  },
  image2: {
    width: 391,
    height: 293,
    marginTop: 111,
    marginLeft: 1428
  }
});

export default Homepages;
