import React, {useState} from "react"
import { Text, View, SafeAreaView, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import CarouselCards from '../Screens/Carousel/CarouselCards'

export default function HomeScreen({}) {

  const [input, setInput] = React.useState("");
  const [name, setName] = React.useState("");
  
  function buttonPressed() {
    setName(input);
    setInput("");
  }
  
  /*pretty sure that the name will not save*/
  return(
    <View style= {{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 40}}>
      <Text style={{ fontSize: 30}}>Welcome to the Home Screen!</Text>
      <Text style={{ fontSize: 30, paddingBottom:15}} >{name}</Text>
      <Text style={{ fontSize: 15, color: "grey" }}>please key in your name</Text>
    
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
              <Text style={{AlignLeft: 50, fontSize: 15, color: "white"}}>
                Confirm 
              </Text>
        </Icon.Button>
        <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});