import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KeepingFitScreen from '../Screens/KeepingFitScreen';

function SupportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sUpportStack}>
        <View style={styles.sUpport}>
          <View style={styles.heartIconStack}>
            <MaterialCommunityIconsIcon
              name="cards-heart"
              style={styles.heartIcon}></MaterialCommunityIconsIcon>
            <Text style={styles.supportHeader}>Support</Text>
            <Text style={styles.supportDescription}>
              &quot;There is no need to suffer silently and there is no shame in
              seeking help.&quot; ~ Catherine Zeta-Jones
            </Text>
          </View>
        </View>
        <View style={styles.tips}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FeelingMuscleSoreness')}
            style={styles.feelingMuscleSorenessButton}>
            <View style={styles.feelingMuscleFatigueTextRow}>
              <Text style={styles.feelingMuscleFatigueText}>
                Feeling Muscle Soreness?
              </Text>
              <View style={styles.feelingMuscleSorenessArrow}>
                <FeatherIcon
                  name="chevron-down"
                  style={styles.arrow4}></FeatherIcon>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.feelingLostButtonStack}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FeelingLost')}
              style={styles.feelingLostButton}>
              <View style={styles.feelingLost2Row}>
                <Text style={styles.feelingLost2}>Feeling Lost?</Text>
                <View style={styles.feelingLostArrow}>
                  <FeatherIcon
                    name="chevron-down"
                    style={styles.arrow}></FeatherIcon>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('FeelingOverwhelmed')}
              style={styles.feelingOverwhelmedButton}>
              <View style={styles.feelingOverwhelmedTextRow}>
                <Text style={styles.feelingOverwhelmedText}>
                  Feeling Overwhelmed?
                </Text>
                <View style={styles.feelingOverwhelmedArrow}>
                  <FeatherIcon
                    name="chevron-down"
                    style={styles.arrow1}></FeatherIcon>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.feelingDownButtonStack}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FeelingDown')}
              style={styles.feelingDownButton}>
              <View style={styles.feelingDownTextRow}>
                <Text style={styles.feelingDownText}>Feeling Down?</Text>
                <View style={styles.feelingDownArrow}>
                  <FeatherIcon
                    name="chevron-down"
                    style={styles.arrow2}></FeatherIcon>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('KeepingFit')}
              style={styles.keepingFitButton}>
              <View style={styles.talkToSomeoneText1Row}>
                <Text style={styles.talkToSomeoneText1}>
                  Struggling to Keep Fit?
                </Text>
                <View style={styles.talkToSomeoneArrow1}>
                  <FeatherIcon
                    name="chevron-down"
                    style={styles.arrow7}></FeatherIcon>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('TalkToSomeone')}
            style={styles.talkToSomeoneButton}>
            <View style={styles.talkToSomeoneTextRow}>
              <Text style={styles.talkToSomeoneText}>Talk to Someone</Text>
              <View style={styles.talkToSomeoneArrow}>
                <FeatherIcon
                  name="chevron-down"
                  style={styles.arrow3}></FeatherIcon>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sUpport: {
    left: 0,
    width: 375,
    height: 634,
    position: 'absolute',
    top: -65,
  },
  heartIcon: {
    top: 0,
    left: 133,
    position: 'absolute',
    color: 'rgba(74,144,226,1)',
    fontSize: 38,
  },
  supportHeader: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 64,
    width: 137,
    fontSize: 35,
  },
  supportDescription: {
    top: 53,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 82,
    width: 326,
    fontSize: 19,
  },
  heartIconStack: {
    width: 326,
    height: 135,
    marginLeft: 16,
  },
  tips: {
    top: 100,
    left: 0,
    width: 375,
    height: 497,
    position: 'absolute',
  },
  feelingMuscleSorenessButton: {
    width: 375,
    height: 45,
    backgroundColor: 'rgba(0,188,212,0.1)',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    
  },
  feelingMuscleFatigueText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 279,
    fontSize: 21,
    marginTop: 5,
  },
  feelingMuscleSorenessArrow: {
    width: 46,
    height: 45,
    marginLeft: 25,
  },
  arrow4: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  feelingMuscleFatigueTextRow: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 16,
  },
  feelingLostButton: {
    top: 0,
    left: 0,
    width: 375,
    height: 45,
    position: 'absolute',
    backgroundColor: 'rgba(0,188,212,0.1)',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    
  },
  feelingLost2: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 279,
    fontSize: 21,
    marginTop: 5,
  },
  feelingLostArrow: {
    width: 46,
    height: 45,
    marginLeft: 25,
  },
  arrow: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  feelingLost2Row: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 16,
  },
  feelingOverwhelmedButton: {
    top: 45,
    left: 0,
    width: 375,
    height: 45,
    position: 'absolute',
    backgroundColor: 'rgba(0,188,212,0.1)',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    
  },
  feelingOverwhelmedText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 292,
    fontSize: 21,
    marginTop: 5,
  },
  feelingOverwhelmedArrow: {
    width: 46,
    height: 45,
    marginLeft: 14,
  },
  arrow1: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  feelingOverwhelmedTextRow: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 14,
  },
  feelingLostButtonStack: {
    width: 375,
    height: 89,
  },
  feelingDownButton: {
    top: 1,
    left: 0,
    width: 375,
    height: 42,
    position: 'absolute',
    backgroundColor: 'rgba(0,188,212,0.1)',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    
  },
  feelingDownText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 292,
    fontSize: 21,
    marginTop: 5,
  },
  feelingDownArrow: {
    width: 46,
    height: 45,
    marginLeft: 14,
  },
  arrow2: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  feelingDownTextRow: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 14,
  },
  keepingFitButton: {
    width: 377,
    height: 48,
    position: 'absolute',
    backgroundColor: 'rgba(0,188,212,0.1)',
    top: 43,
    left: 0,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    
  },
  talkToSomeoneText1: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 292,
    fontSize: 21,
    marginTop: 5,
  },
  talkToSomeoneArrow1: {
    width: 46,
    height: 45,
    marginLeft: 14,
  },
  arrow7: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  talkToSomeoneText1Row: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 14,
  },
  feelingDownButtonStack: {
    width: 375,
    height: 91,
  },
  talkToSomeoneButton: {
    width: 375,
    height: 48,
    backgroundColor: 'rgba(0,188,212,0.1)',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  talkToSomeoneText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 35,
    width: 292,
    fontSize: 21,
    marginTop: 5,
  },
  talkToSomeoneArrow: {
    width: 46,
    height: 45,
    marginLeft: 14,
  },
  arrow3: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    transform: [
      {
        rotate: '270.00deg',
      },
    ],
    marginTop: 4,
    alignSelf: 'center',
  },
  talkToSomeoneTextRow: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 14,
  },
  sUpportStack: {
    width: 375,
    height: 645,
    marginTop: 89,
  },
  
  tipText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 25,
    width: 49,
    fontSize: 20,
    marginLeft: 15,
    marginTop: 7,
  },
  tipTextFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  
  
});

export default SupportScreen;