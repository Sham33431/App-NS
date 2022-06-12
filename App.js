import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import FitnessScreen from './Screens/FitnessScreen';
import TipsScreen from './Screens/TipsScreen';
import ShopScreen from './Screens/ShopScreen';
import MoreScreen from './Screens/MoreScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
           let iconName;
           
           
           //Set the icon based on which route it is (name of the tab)
           if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            
           } else if (route.name === 'More') {
            iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';

           }else if (route.name === 'Shops') {
            iconName = focused ? 'md-cart-sharp' : 'md-cart-outline';
            
           }else if (route.name === 'Tips') {
            iconName = focused ? 'bulb-sharp' : 'bulb-outline';

           }else if (route.name === 'Fitness') {
            iconName = focused ? 'md-fitness-sharp' : 'md-fitness-outline';
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

