import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function DealsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.dEAlsStack}>
          <View style={styles.dEAls}>
            <View style={styles.dealsRow}>
              <Text style={styles.deals}>Deals</Text>
              <FontAwesomeIcon
                name="money"
                style={styles.moneyNotesIcon}></FontAwesomeIcon>
            </View>
            <Text style={styles.dealsDescription}>
              Check out these Telegram Channels for some exciting deals!
            </Text>
          </View>
          <View style={styles.scrollArea1}>
            <View
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}>
              <View style={styles.content1}>
                <View style={styles.text1Stack}>
                  <Text style={styles.text1}>
                    - @sgfooddeals – food deals &amp; promotions in Singapore
                    {'\n'}- @sghalaldeals – promotions at Halal outlets in
                    Singapore{'\n'}- @veganssg – dedicated channel for
                    vegetarian/ vegan food{'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}- @sgfitnesshealth – fitness &amp; health-related
                    activities{'\n'}- PNSD - IPPT/BUDDY FIT Broadcast – Receive
                    up to date news on IPPT / BUDDY FIT{'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}- @sgmrt – realtime MRT disruption and delay updates
                    {'\n'}- @sgbusunclebot – for bus arrival time{'\n'}
                    {'\n'}
                    {'\n'}
                   
                    {'\n'}- @sgweekend – ideas for a fun weekend plan{'\n'}-
                    @dateideas – ideas for memorable outing{'\n'}
                    {'\n'}
                    {'\n'}
                    
                    {'\n'}- @sgstudentpromos – dedicated channel for student’s
                    deals
                    {'\n'}- @techngames – tech &amp; games promotions{'\n'}-
                    @SAFRAsg - promotions especially for SAFRA members
                  </Text>
                  <Text style={styles.food}>Food</Text>
                  <Text style={styles.fitness}>Fitness</Text>
                  <Text style={styles.transport}>Transport</Text>
                  <Text style={styles.lifestyle}>Lifestyle</Text>
                  <Text style={styles.others}>Others</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tipsText: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 25,
    width: 49,
    fontSize: 20,
    marginLeft: 32,
    marginTop: 7,
  },
  tipsTextFiller: {
    flex: 1,
    flexDirection: 'row',
  },

  dEAls: {
    left: 0,
    width: 375,
    height: 622,
    position: 'absolute',
    top: 0,
  },
  deals: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 101,
    fontSize: 40,
    fontWeight: 'bold',
  },
  moneyNotesIcon: {
    color: 'rgba(51,139,63,1)',
    fontSize: 40,
    marginLeft: 15,
    marginTop: 7,
  },
  dealsRow: {
    height: 57,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 204,
  },
  dealsDescription: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 61,
    width: 326,
    fontSize: 20,
    marginLeft: 16,
  },
  scrollArea1: {
    top: 3,
    left: 0,
    width: 375,
    height: 714,
    position: 'absolute',
  },
  scrollArea1_contentContainerStyle: {
    height: 760,
    width: 375,
  },
  content1: {
    width: 329,
    height: 610,
    marginTop: 150,
    alignSelf: 'center',
  },
  text1: {
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 1807,
    width: 321,
    left: 0,
    top: 30,
    fontSize:20,
  },
  food: {
    top: 5,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 25,
    width: 262,
    fontSize: 21,
    fontWeight: 'bold',
  },
  fitness: {
    top: 220,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 30,
    width: 293,
    fontSize: 21,
    fontWeight: 'bold',
  },
  transport: {
    top: 411,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 30,
    width: 293,
    fontSize: 21,
    fontWeight: 'bold',
  },
  lifestyle: {
    top: 575,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 30,
    width: 293,
    fontSize: 21,
    fontWeight: 'bold',
  },
  others: {
    top: 743,
    left: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 30,
    width: 293,
    fontSize: 21,
   fontWeight: 'bold',
  },
  text1Stack: {
    width: 321,
    height: 1831,
    marginTop: -25,
  },
  dEAlsStack: {
    width: 375,
    height: 717,
    marginTop: 6,
  },
});

export default DealsScreen;