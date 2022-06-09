import React from "react"
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from 'react-native-feather' 
 
  function HomeScreen(props){
    return (
      <View style={styles.container}>
        <View style={styles.topOfHome}>
          <View style={styles.introBoxStack}>
            <View style={styles.introBox}>
              <View style={styles.nameTextBoxRow}>
                <TextInput
                  placeholder="Insert your name here"
                  clearButtonMode="always"
                  keyboardAppearance="default"
                  placeholderTextColor="rgba(132,126,126,1)"
                  maxLength={20}
                  style={styles.nameTextBox}
                ></TextInput>
                <Text style={styles.exclamationMark}>!</Text>
              </View>
            </View>
            <Text style={styles.hello}>Hello</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBox}>
            <View style={styles.nS11BStack}>
              <Image
                source={require("../assets/ArmyCard.jpg")}
                resizeMode="contain"
                style={styles.nS11B}
              ></Image>
              <TouchableOpacity style={styles.clickablePart}>
                <View style={styles.box}>
                  <Text style={styles.myCardsText}>My Cards</Text>
                  <View style={styles.myCardsTextFiller}></View>
                  <View style={styles.myCardsArrow}>
                    <View style={styles.arrowBoxStack}>
                      <View style={styles.arrowBox}></View>
                      <Icon.ChevronDown />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(15,15, 15,0)"
    },
    topOfHome: {
      width: 374,
      height: 87,
      marginTop: 60,
      marginLeft: 1
    },
    introBox: {
      top: 0,
      left: 0,
      width: 374,
      height: 87,
      position: "absolute",
      backgroundColor: "rgba(230,230, 230,0)",
      flexDirection: "row"
    },
    nameTextBox: {
      fontFamily: "roboto-italic",
      color: "#121212",
      height: 38,
      width: 210,
      borderWidth: 1,
      borderColor: "#000000",
      borderStyle: "dotted",
      textAlign: "center",
      backgroundColor: "rgba(230, 230, 230,0.58)",
      fontSize: 15,
      marginTop: 2
    },
    exclamationMark: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontSize: 35,
      marginLeft: 8
    },
    nameTextBoxRow: {
      height: 42,
      flexDirection: "row",
      flex: 1,
      marginRight: 30,
      marginLeft: 117,
      marginTop: 22
    },
    hello: {
      top: 18,
      left: 16,
      position: "absolute",
      fontFamily: "helvetica-regular",
      color: "#121212",
      fontSize: 40,
      width: 101,
      height: 110
    },
    introBoxStack: {
      width: 374,
      height: 128
    },
    card: {
      width: 374,
      height: 247,
      marginLeft: 1
    },
    cardBox: {
      width: 374,
      height: 308,
      backgroundColor: "rgba(230,230, 230,0)"
    },
    nS11B: {
      top: 58,
      width: 270,
      height: 243,
      position: "absolute",
      left: 52
    },
    clickablePart: {
      top: 0,
      left: 0,
      width: 374,
      height: 62,
      position: "absolute"
    },
    box: {
      width: 374,
      height: 62,
      backgroundColor: "rgba(230,230, 230,0)",
      flexDirection: "row"
    },
    myCardsText: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 39,
      width: 102,
      fontSize: 21,
      marginLeft: 15,
      marginTop: 17
    },
    myCardsTextFiller: {
      flex: 1,
      flexDirection: "row"
    },
    myCardsArrow: {
      width: 39,
      height: 39,
      marginRight: 15,
      marginTop: 17
    },
    arrowBox: {
      top: 0,
      left: 1,
      width: 39,
      height: 39,
      position: "absolute",
      backgroundColor: "rgba(230,230, 230,0)"
    },
    arrow: {
      top: 0,
      position: "absolute",
      color: "rgba(128,128,128,1)",
      fontSize: 41,
      left: 0
    },
    arrowBoxStack: {
      width: 41,
      height: 41,
      marginLeft: -1
    },
    nS11BStack: {
      width: 374,
      height: 301
    }
  });

  export default HomeScreen() 