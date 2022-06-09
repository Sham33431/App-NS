import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FitnessScreen from './screens/FitnessScreen';
import TipsScreen from './screens/TipsScreen';
import ShopScreen from './screens/ShopScreen';
import MoreScreen from './screens/MoreScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;
           
           //Set the icon based on which route it is (name of the tab)
           if (route.name === 'Home') {
            if (focused) {
              iconName = 'home'
            }else {
              iconName = 'home-outline'
            }
           } else if (route.name === 'More') {
             if (focused) {
               iconName = 'list-circle-sharp'
             }else {
               iconName = 'list-circle-outline'
             }

           }else if (route.name === 'Shops') {
             if (focused) {
               iconName = 'md-cart-sharp'
             }else {
               iconName = 'md-cart-outline'
             }
            
           }else if (route.name === 'Tips') {
             if (focused) {
               iconName = 'bulb-sharp'
             }else {
               iconName = 'bulb-outline'
             }

           }else if (route.name === 'Fitness') {
             if (focused) {
               iconName = 'md-fitness-sharp'
             }else {
              iconName = 'md-fitness-outline'; 
             }
           }

           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
       })}
     >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shops" component={ShopScreen} /> 
        <Tab.Screen name="Tips" component={TipsScreen} />
        <Tab.Screen name="Fitness" component={FitnessScreen} />
        <Tab.Screen name="More" component={MoreScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
