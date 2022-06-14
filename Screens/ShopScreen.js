import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';


export default function ShopScreen() {

  let [count, setCount] = useState(0)

  function buttonPressed() {
    setCount(count + 1)
  }
  function prev() {
    setCount(count - 1)
  }

  function details() {

  if (count === 1) {
    return 'Location: 2 Yishun Walk, Singapore 767944'
  }
    if (count === 2) {    
      return 'Monday - Sunday , 10:30am–8:30pm'
  }
    if (count === 3) {
      return 'Tel: 6708 6670'
    }
    if (count === 4) {
      return 'Website: https://www.hometeamns.sg/khatib/'
    }
    if (count === 5) {
      count = 5
    }
    if (count === 6) {
      count = 0
    }
    if (count < 0) {
      count = 0
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.title}> E-Mart! </Text>
    <Image source={require('../assets/emart.png')} style={{ width: 400, height: 400 }}></Image>
      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPrev} onPress={prev}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFor} onPress={buttonPressed}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{details()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 28,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 50,
    color: '#669DB3FF'
  },
  text: {
    marginTop: 10,
    color: 'black',
    fontSize: 17,
  },
  button: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 10,
    bottom: 240,
    right: 30,
  },
  buttonPrev: {
    backgroundColor: '#669DB3FF',
    padding: 10,
    borderRadius: 5,
    right: 80,
  },
  buttonFor: {
    backgroundColor: '#669DB3FF',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    left: 80,
    bottom: 39,
    
  },
  map: {
    width: Dimensions.get('window').width
  },

});