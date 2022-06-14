import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function TipsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.tIPS}>
        <Text style={styles.tipsHeader}>Tips</Text>
        <Text style={styles.tipsDescription}>
          Hey there, what do you wish to look for today?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Deals")}
          style={styles.deals}>
          <Text style={styles.dealsText}>Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Support")}
          style={styles.sUpport}>
          <Text style={styles.supportText}>Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
  },
  tIPS: {
    width: 375,
    height: 622,
    marginTop: 68,
  },
  tipsHeader: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 44,
    width: 92,
    fontSize: 40,
    marginTop: -45, 
   marginLeft: 16,
  },
  tipsDescription: {
    fontFamily: 'roboto',
    color: '#121212',
    height: 68,
    width: 318,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  deals: {
    width: 309,
    height: 116,
    backgroundColor: 'rgba(62,69,81,0.3)',
    marginTop: 65,
    marginLeft: 33,
    
  },
  dealsText: {
    fontFamily: 'roboto',
    color: '#121212',
    height: 56,
    width: 115,
    fontSize: 35,
    marginTop: 30,
    marginLeft: 105,
  
  },
  sUpport: {
    width: 309,
    height: 116,
    backgroundColor: 'rgba(62,69,81,0.3)',
    marginTop: 92,
    marginLeft: 33,
  },
  supportText: {
    fontFamily: 'roboto',
    color: '#121212',
    height: 49,
    width: 142,
    fontSize: 35,
    marginTop: 33,
    marginLeft: 84,
  },
});

export default TipsScreen;