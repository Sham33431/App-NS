import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Formik, Form, Field } from 'formik';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IPPT Records')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>IPPT Records</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Frequently Asked Questions')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Report a Vulnerability')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Report Vulnerability
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Send Error Log')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Send Error Log
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function IPPT({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.record}>Pushup : 34</Text>
      <Text style={styles.record}>Situp: 30</Text>
      <Text style={styles.record}>2.4km run: 12.6</Text>
      <Text style={styles.record}>Result: Pass with incentive (60)</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function FAQ({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function Error({ navigation }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values) => console.log(values)}>
        <Form style={{ marginTop: 28 }}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="XXXX@XXXX.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function Vul({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white', fontWeight: 'bold'  }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More!" component={HomeScreen} />
      <Stack.Screen name="IPPT Records" component={IPPT} />
      <Stack.Screen name="Frequently Asked Questions" component={FAQ} />
      <Stack.Screen name="Send Error Log" component={Error} />
      <Stack.Screen name="Report a Vulnerability" component={Vul} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#669DB3FF',
    padding: 12,
    marginTop: 5,
    top: 50,
    borderRadius: 5,
    width: Dimensions.get('window').width
  },
  record: {
    marginTop: 10,
    fontSize: 20,
  },
});