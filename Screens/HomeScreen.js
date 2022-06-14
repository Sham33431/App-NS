import React, {useState} from "react"
import { Text, View, SafeAreaView, StyleSheet, Image, ScrollView } from "react-native"
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import CarouselCards from '../Screens/CarouselCards'

export default function HomeScreen({}) {

  const [input, setInput] = React.useState("");
  const [name, setName] = React.useState("");
  
  function buttonPressed() {
    setName(input);
    setInput("");
  }
  
  /*pretty sure that the name will not save*/
  return(
    <ScrollView style= {{ marginTop: 70}}>
      <ScrollView>
      <Text style={{ fontSize: 30, alignSelf:"center"}}>Welcome to the Home Screen!</Text>
      <Text style={{ fontSize: 30, paddingBottom:15}} >{name}</Text>
      <Text style={{ fontSize: 15, color: "grey" , alignSelf:"center"}}>please key in your name</Text>
    
      <View>
        <TextInput 
            id="outlined-name"
            label="Name"
            value={input}
            onChangeText={(value) => {setInput(value)}}
          /> 
        <Icon.Button
            label="Name"
            name="check" 
            onPress={buttonPressed}
            >
              <Text style={{ fontSize: 15, color: "white"}}>
                Confirm 
              </Text>
        </Icon.Button>
        <Image style= {styles.image}
          source={require('../assets/ArmyCard.jpg')}/>
        <SafeAreaView style={styles.container}>
          <CarouselCards />
        </SafeAreaView>
      </View>
       <Image source={require('../assets/InspirationalQuote.png')}/>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },

    image: {
    alignSelf: "center",
    height: 200,
    resizeMode: 'stretch',
  },
});