import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { RadioButton } from "react-native-paper";

function FitnessScreen(props) {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [z, setZ] = useState(0);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [checked, setChecked] = React.useState('');

  function onChangeY(value) {
    let totalScore = parseInt(value);
    if (totalScore < 15) {
      setY(1);
    } else if (totalScore === 16) {
      setY(2);
    } else if (totalScore === 17) {
      setY(4);
    } else if (totalScore === 18) {
      setY(6);
    } else if (totalScore === 19) {
      setY(8);
    } else if (totalScore === 20) {
      setY(9);
    } else if (totalScore === 21) {
      setY(10);
    } else if (totalScore === 22) {
      setY(11);
    } else if (totalScore === 23) {
      setY(12);
    } else if (totalScore === 24) {
      setY(13);
    } else if (totalScore === 25) {
      setY(14);
    } else if (26 <= totalScore && totalScore < 28) {
      setY(15);
    } else if (28 <= totalScore && totalScore < 31) {
      setY(16);
    } else if (31 <= totalScore && totalScore < 34) {
      setY(17);
    } else if (34 <= totalScore && totalScore < 37) {
      setY(18);
    } else if (37 <= totalScore && totalScore < 40) {
      setY(19);
    } else if (40 <= totalScore && totalScore < 44) {
      setY(20);
    } else if (44 <= totalScore && totalScore < 48) {
      setY(21);
    } else if (48 <= totalScore && totalScore < 52) {
      setY(22);
    } else if (52 <= totalScore && totalScore < 56) {
      setY(23);
    } else if (56 <= totalScore && totalScore < 60) {
      setY(24);
    } else if (totalScore >= 60) {
      setY(25);
    } else {
      setY(0);
    }
  }
  function onChangeX(value) {
    let totalScore = parseInt(value);

    if (totalScore <= 15) {
      setX(1);
    } else if (totalScore === 16) {
      setX(2);
    } else if (totalScore === 17) {
      setX(3);
    } else if (totalScore === 18) {
      setX(4);
    } else if (totalScore === 19) {
      setX(5);
    } else if (20 <= totalScore && totalScore < 22) {
      setX(6);
    } else if (22 <= totalScore && totalScore < 24) {
      setX(7);
    } else if (24 <= totalScore && totalScore < 25) {
      setX(8);
    } else if (totalScore === 25) {
      setX(9);
    } else if (totalScore === 26) {
      setX(10);
    } else if (totalScore === 27) {
      setX(11);
    } else if (totalScore === 28) {
      setX(12);
    } else if (29 <= totalScore && totalScore < 30) {
      setX(13);
    } else if (30 <= totalScore && totalScore < 31) {
      setX(14);
    } else if (31 <= totalScore && totalScore < 33) {
      setX(15);
    } else if (totalScore === 34) {
      setX(16);
    } else if (totalScore === 35) {
      setX(17);
    } else if (36 <= totalScore && totalScore < 38) {
      setX(18);
    } else if (38 <= totalScore && totalScore < 40) {
      setX(19);
    } else if (40 <= totalScore && totalScore < 44) {
      setX(20);
    } else if (44 <= totalScore && totalScore < 48) {
      setX(21);
    } else if (48 <= totalScore && totalScore < 52) {
      setX(22);
    } else if (52 <= totalScore && totalScore < 56) {
      setX(23);
    } else if (56 <= totalScore && totalScore < 60) {
      setX(24);
    } else if (totalScore >= 60) {
      setX(25);
    } else {
      setX(0);
    }
  }
  function compute() {
    let val = x + y + z;
    let ret;
    console.log(val);
    if (val < 51) {
      return 'FAILED';
    } else if (val >= 51 && val < 75) {
      return 'PASS with incentive';
    } else if (val >= 75 && val < 85) {
      return 'SILVER';
    } else if (val >= 85 && val < 90) {
      return 'GOLD';
    } else if (val >= 90) {
      return 'GOLD Commando';
    } else {
      return 'FAILED';
    }
  }
  function onChangeZ(value) {
    let totalScore = parseFloat(value);
    if (totalScore < 8.3) {
      setZ(50);
    } else if (8.3 <= totalScore && totalScore < 8.4) {
      setZ(49);
    } else if (8.4 <= totalScore && totalScore < 8.5) {
      setZ(48);
    } else if (8.5 <= totalScore && totalScore < 9.0) {
      setZ(47);
    } else if (9.0 <= totalScore && totalScore < 9.1) {
      setZ(46);
    } else if (9.1 <= totalScore && totalScore < 9.2) {
      setZ(45);
    } else if (9.2 <= totalScore && totalScore < 9.3) {
      setZ(44);
    } else if (9.3 <= totalScore && totalScore < 9.4) {
      setZ(43);
    } else if (9.4 <= totalScore && totalScore < 9.5) {
      setZ(42);
    } else if (9.5 <= totalScore && totalScore < 10.0) {
      setZ(41);
    } else if (10.0 <= totalScore && totalScore < 10.1) {
      setZ(40);
    } else if (10.2 <= totalScore && totalScore < 10.3) {
      setZ(39);
    } else if (10.3 <= totalScore && totalScore < 10.4) {
      setZ(38);
    } else if (10.4 <= totalScore && totalScore < 11.0) {
      setZ(37);
    } else if (11.0 <= totalScore && totalScore < 11.2) {
      setZ(36);
    } else if (11.2 <= totalScore && totalScore < 11.4) {
      setZ(35);
    } else if (11.4 <= totalScore && totalScore < 11.5) {
      setZ(34);
    } else if (11.4 <= totalScore && totalScore < 12.0) {
      setZ(33);
    } else if (12.0 <= totalScore && totalScore < 12.2) {
      setZ(32);
    } else if (12.2 <= totalScore && totalScore < 12.3) {
      setZ(31);
    } else if (12.3 <= totalScore && totalScore < 12.4) {
      setZ(30);
    } else if (12.4 <= totalScore && totalScore < 12.5) {
      setZ(29);
    } else if (12.5 <= totalScore && totalScore < 13.0) {
      setZ(28);
    } else if (13.0 <= totalScore && totalScore < 13.1) {
      setZ(27);
    } else if (13.1 <= totalScore && totalScore < 13.2) {
      setZ(26);
    } else if (13.2 <= totalScore && totalScore < 13.3) {
      setZ(25);
    } else if (13.3 <= totalScore && totalScore < 13.4) {
      setZ(24);
    } else if (13.4 <= totalScore && totalScore < 13.5) {
      setZ(23);
    } else if (13.5 <= totalScore && totalScore < 14.0) {
      setZ(22);
    } else if (14.0 <= totalScore && totalScore < 14.1) {
      setZ(21);
    } else if (14.1 <= totalScore && totalScore < 14.2) {
      setZ(20);
    } else if (14.2 <= totalScore && totalScore < 14.3) {
      setZ(19);
    } else if (14.3 <= totalScore && totalScore < 14.4) {
      setZ(18);
    } else if (14.4 <= totalScore && totalScore < 14.5) {
      setZ(16);
    } else if (14.5 <= totalScore && totalScore < 15.0) {
      setZ(14);
    } else if (15.0 <= totalScore && totalScore < 15.1) {
      setZ(12);
    } else if (15.1 <= totalScore && totalScore < 15.2) {
      setZ(10);
    } else if (15.2 <= totalScore && totalScore < 15.3) {
      setZ(8);
    } else if (15.3 <= totalScore && totalScore < 15.4) {
      setZ(6);
    } else if (15.4 <= totalScore && totalScore < 15.5) {
      setZ(4);
    } else if (15.5 <= totalScore && totalScore < 16.0) {
      setZ(2);
    } else if (16 <= totalScore) {
      setZ(0);
    } else {
      setZ(0);
    }
  }
  
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
              onChangeText={(value) => onChangeY(value)}
              keyboardType="numeric"
              style={styles.textInput}></TextInput>
          </View>
        </View>
        <View style={styles.rect1Row}>
          <View style={styles.rect1}>
            <Text style={styles.numberOfSitUp}>Number of sit up</Text>
          </View>
          <View style={styles.rect4}>
            <TextInput
              placeholder="e.g 46"
              onChangeText={(value) => onChangeX(value)}
              keyboardType="numeric"
              style={styles.textInput1}></TextInput>
          </View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <View style={styles.numberOfPushUp2Stack}>
              <Text style={styles.numberOfPushUp2}>2.4km run</Text>
              <Text style={styles.text5}></Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <TextInput
              placeholder="e.g 10.30"
              onChangeText={(value) => onChangeZ(value)}
              keyboardType="numeric"
              style={styles.textInput4}></TextInput>
          </View>
        </View>
        <View style={styles.button2Row}>

          <View>
            <RadioButton
              value="male"
              status={ checked === 'male' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('male')}
            />
          </View>
          <TouchableOpacity 
              onPress={() => setChecked('male')}
          >
            <Text style={styles.male}>Male</Text>
          </TouchableOpacity>
          <View>
            <RadioButton
              value="female"
              status={ checked === 'female' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('female')}
            />
          </View>
          <TouchableOpacity 
              onPress={() => setChecked('female')}
          >
            <Text style={styles.female}>Female</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.age7Row}>
          <Text style={styles.age7}>age:</Text>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}></View>
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
            value={isEnabled}></Switch>
        </View>
        <View style={styles.rect8}>
          <View style={styles.pass59Row}>
            <Text style={styles.pass59}>{compute()} :</Text>
            <Text style={styles.loremIpsum}>{x + y + z}</Text>
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
    marginLeft: 11,
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
  },
  text5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  numberOfPushUp2Stack: {
    width: 179,
    height: 71,
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
    height: 71,
    width: 68,
    fontSize: 20,
    marginTop: 18,
    marginLeft: 11,
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
    height: 34,
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
    top: 0,
    left: 1,
    width: 56,
    height: 32,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
  },
  textInput3: {
    top: 4,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 28,
    width: 56,
    fontSize: 20,
  },
  rect6Stack: {
    width: 57,
    height: 32,
    marginLeft: 35,
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
    fontSize: 30,
    marginTop: 25,
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

export default FitnessScreen;