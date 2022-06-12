import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';

function FitnessScreen(props) {
  const [y, sety] = useState('y');
  const [x, setx] = useState('x');
  const [z, setz] = useState('z');
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rectRow}>
          <View style={styles.rect}>
            <Text style={styles.numberOfPushUp}>Number of push up</Text>
          </View>
          <View style={styles.rect7}>
            <TextInput
              placeholder="e.g 40"
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={(value) => sety(value)}></TextInput>
          </View>
        </View>
        <View style={styles.rect1Row}>
          <View style={styles.rect1}>
            <Text style={styles.numberOfSitUp}>Number of sit up</Text>
          </View>
          <View style={styles.rect4}>
            <TextInput
              placeholder="e.g 46"
              keyboardType="numeric"
              style={styles.textInput1}
              onChangeText={(value) => setx(value)}></TextInput>
          </View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <Text style={styles.numberOfPushUp2}>2.4km run</Text>
          </View>
          <View style={styles.rect9}>
            <TextInput
              placeholder="e.g 10.30"
              keyboardType="numeric"
              style={styles.textInput4}
              onChangeText={(value) => setz(value)}></TextInput>
          </View>
        </View>
        <View style={styles.button2Row}>
          <TouchableOpacity style={styles.button2}></TouchableOpacity>
          <Text style={styles.male}>Male</Text>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button1}></TouchableOpacity>
          <Text style={styles.female}>Female</Text>
        </View>
        <View style={styles.age7Row}>
          <Text style={styles.age7}>age:</Text>
          <View style={styles.rect6}>
            <TextInput
              placeholder="e.g 18"
              keyboardType="numeric"
              style={styles.textInput3}></TextInput>
          </View>
        </View>
        <View style={styles.commandoNavyRow}>
          <Text style={styles.commandoNavy}>commando/navy</Text>
          <Switch
            style={{ marginLeft: 60 }}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.rect8}>
          <View style={styles.pass59Row}>
            <Text style={styles.pass59}>PASS :</Text>
            <Text style={styles.loremIpsum}>{y + x + z}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 208,
    height: 105,
    backgroundColor: '#E6E6E6',
  },
  numberOfPushUp: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 71,
    width: 179,
    fontSize: 25,
    marginTop: 17,
    marginLeft: 14,
  },
  rect7: {
    width: 89,
    height: 105,
    backgroundColor: '#E6E6E6',
    marginLeft: 27,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 71,
    width: 68,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 11,
  },
  rectRow: {
    height: 105,
    flexDirection: 'row',
    marginTop: 125,
    marginLeft: 35,
    marginRight: 16,
  },
  rect1: {
    width: 208,
    height: 105,
    backgroundColor: '#E6E6E6',
  },
  numberOfSitUp: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 71,
    width: 179,
    fontSize: 25,
    marginTop: 17,
    marginLeft: 14,
  },
  rect4: {
    width: 89,
    height: 105,
    backgroundColor: '#E6E6E6',
    marginLeft: 27,
  },
  textInput1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 71,
    width: 68,
    fontSize: 20,
    marginTop: 17,
    marginLeft: 13,
  },
  rect1Row: {
    height: 105,
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 35,
    marginRight: 16,
  },
  rect2: {
    width: 208,
    height: 105,
    backgroundColor: '#E6E6E6',
  },
  numberOfPushUp2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 71,
    width: 179,
    fontSize: 25,
    marginTop: 17,
    marginLeft: 14,
  },
  rect9: {
    width: 89,
    height: 105,
    backgroundColor: '#E6E6E6',
    marginLeft: 27,
  },
  textInput4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 79,
    width: 70,
    fontSize: 20,
    marginTop: 13,
    marginLeft: 12,
  },
  rect2Row: {
    height: 105,
    flexDirection: 'row',
    marginTop: 27,
    marginLeft: 35,
    marginRight: 16,
  },
  button2: {
    width: 21,
    height: 21,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 54,
    marginTop: 2,
  },
  male: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginLeft: 7,
  },
  button1: {
    width: 21,
    height: 21,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 54,
    marginLeft: 54,
    marginTop: 2,
  },
  female: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginLeft: 6,
  },
  button2Row: {
    height: 24,
    flexDirection: 'row',
    marginTop: 29,
    marginLeft: 72,
    marginRight: 85,
  },
  age7: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 4,
  },
  rect6: {
    width: 56,
    height: 32,
    backgroundColor: '#E6E6E6',
    marginLeft: 36,
  },
  textInput3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 28,
    width: 56,
    fontSize: 20,
    marginTop: 4,
  },
  age7Row: {
    height: 32,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 117,
    marginRight: 128,
  },
  commandoNavy: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
  },

  commandoNavyRow: {
    height: 24,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 57,
    marginRight: 82,
  },
  rect8: {
    width: 325,
    height: 114,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 29,
  },
  pass59: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 83,
    width: 193,
    fontSize: 60,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 60,
    marginLeft: 41,
    marginTop: 5,
  },
  pass59Row: {
    height: 83,
    flexDirection: 'row',
    flex: 1,
    marginRight: 21,
    marginLeft: 3,
    marginTop: 16,
  },
});

{
  var x = 0;
}
{
  var y = 0;
}
{
  var z = 0;
}

export default FitnessScreen;
{
  let textInput;
  if (1 < textInput < 15) {
    y = 1;
  } 
  else if (textInput === 16) {
    y = 2;
  } 
  else if (textInput === 17) {
    y = 4;
  } 
  else if (textInput === 18) {
    y = 6;
  } 
  else if (textInput === 19) {
    y = 8;
  } 
  else if (textInput === 20) {
    y = 9;
  } 
  else if (textInput === 21) {
    y = 10;
  } 
  else if (textInput === 22) {
    y = 11;
  } 
  else if (textInput === 23) {
    y = 12;
  } 
  else if (textInput === 24) {
    y = 13;
  } 
  else if (textInput === 25) {
    y = 14;
  }  
  else if (textInput === 26) {
    y = 15;
  } 
  else if (textInput === 28) {
    y = 16;
  } 
  else if (textInput === 31) {
    y = 17;
  } 
  else if (textInput === 34) {
    y = 18;
  } 
  else if (textInput === 37) {
    y = 19;
  } 
  else if (textInput === 40) {
    y = 20;
  } 
  else if (textInput === 44) {
    y = 21;
  } 
  else if (textInput === 48) {
    y = 22;
  } 
  else if (textInput === 52) {
    y = 23;
  } 
  else if (textInput === 56) {
    y = 24;
  } 
  else if (textInput === 60) {
    y = 25;
  }

  let textInput1;
  if (0 < textInput1 <= 15) {
    x = 1;
  } 
  else if (textInput1 === 16) {
    x = 2;
  } 
  else if (textInput1 === 17) {
    x = 3;
  } 
  else if (textInput1 === 18) {
    x = 4;
  } 
  else if (textInput1 === 19) {
    x = 5;
  } 
  else if (textInput1 === 20) {
    x = 6;
  } 
  else if (textInput1 === 22) {
    x = 7;
  } 
  else if (textInput1 === 24) {
    x = 8;
  } 
  else if (textInput1 === 25) {
    x = 9;
  } 
  else if (textInput1 === 26) {
    x = 10;
  } 
  else if (textInput1 === 27) {
    x = 11;
  } 
  else if (textInput1 === 28) {
    x = 12;
  } 
  else if (textInput1 === 29) {
    x = 13;
  } 
  else if (textInput1 === 31) {
    x = 14;
  } 
  else if (textInput1 === 33) {
    x = 15;
  } 
  else if (textInput1 === 34) {
    x = 16;
  } 
  else if (textInput1 === 35) {
    x = 17;
  } 
  else if (textInput1 === 36) {
    x = 18;
  } 
  else if (textInput1 === 38) {
    x = 19;
  } 
  else if (textInput1 === 40) {
    x = 20;
  } 
  else if (textInput1 === 44) {
    x = 21;
  } 
  else if (textInput1 === 48) {
    x = 22;
  } 
  else if (textInput1 === 52) {
    x = 23;
  } 
  else if (textInput1 === 56) {
    x = 24;
  } 
  else if (textInput1 === 60) {
    x = 25;
  }

  let textInput4;
  if (textInput4 <= 8.3) {
    z = 50;
  } 
  else if (8.3 <= textInput4 < 8.4) {
    z = 49;
  } 
  else if (8.4 <= textInput4 < 8.5) {
    z = 48;
  } 
  else if (8.5 <= textInput4 < 9.0) {
    z = 47;
  } 
  else if (9.0 <= textInput4 < 9.1) {
    z = 46;
  } 
  else if (9.1 <= textInput4 < 9.2) {
    z = 45;
  } 
  else if (9.2 <= textInput4 < 9.3) {
    z = 44;
  } 
  else if (9.3 <= textInput4 < 9.4) {
    z = 43;
  } 
  else if (9.4 <= textInput4 < 9.5) {
    z = 42;
  } 
  else if (9.5 <= textInput4 < 10.0) {
    z = 41;
  } 
  else if (10.0 <= textInput4 < 10.1) {
    z = 40;
  } 
  else if (10.1 <= textInput4 < 10.2) {
    z = 39;
  } 
  else if (10.2 <= textInput4 < 10.4) {
    z = 38;
  } 
  else if (10.4 <= textInput4 < 11.0) {
    z = 37;
  } 
  else if (11.0 <= textInput4 < 11.2) {
    z = 36;
  } 
  else if (11.2 <= textInput4 < 11.4) {
    z = 35;
  } 
  else if (11.4 <= textInput4 < 11.5) {
    z = 34;
  } 
  else if (11.5 <= textInput4 < 12.0) {
    z = 33;
  } 
  else if (12.1 <= textInput4 < 12.2) {
    z = 32;
  } 
  else if (12.2 <= textInput4 < 12.3) {
    z = 31;
  } 
  else if (12.3 <= textInput4 < 12.4) {
    z = 30;
  } 
  else if (12.4 <= textInput4 < 12.5) {
    z = 29;
  } 
  else if (12.5 <= textInput4 < 13.0) {
    z = 28;
  } 
  else if (13.0 <= textInput4 < 13.1) {
    z = 27;
  } 
  else if (13.1 <= textInput4 < 13.2) {
    z = 26;
  } 
  else if (13.2 <= textInput4 < 13.3) {
    z = 25;
  } 
  else if (13.3 <= textInput4 < 13.4) {
    z = 24;
  } 
  else if (13.4 <= textInput4 < 13.5) {
    z = 23;
  } 
  else if (13.5 <= textInput4 < 14.0) {
    z = 22;
  } 
  else if (14.0 <= textInput4 < 14.1) {
    z = 21;
  } 
  else if (14.1 <= textInput4 < 14.2) {
    z = 20;
  } 
  else if (14.2 <= textInput4 < 14.3) {
    z = 19;
  } 
  else if (14.3 <= textInput4 < 14.4) {
    z = 18;
  } 
  else if (14.4 <= textInput4 < 14.5) {
    z = 16;
  } 
  else if (14.5 <= textInput4 < 15.0) {
    z = 14;
  } 
  else if (15.0 <= textInput4 < 15.1) {
    z = 12;
  } 
  else if (15.1 <= textInput4 < 15.2) {
    z = 10;
  } 
  else if (15.2 <= textInput4 < 15.3) {
    z = 8;
  } 
  else if (15.3 <= textInput4 < 15.4) {
    z = 6;
  } 
  else if (15.4 <= textInput4 < 15.5) {
    z = 4;
  } 
  else if (15.5 <= textInput4 < 16.0) {
    z = 2;
  } 
  else if (textInput4 > 16.0) {
    z = 0;
  }
}