import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Songlist from '../Screen/Songlist'
import Home from '../Screen/Home'
import LoginScreen from '../Screen/LoginScreen'
import { Ionicons } from "react-native-vector-icons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native'
import Signupscreen from '../Screen/Signupscreen'
import Navigation from '../navigation/Navigation';
import Musicplayer from '../Screen/Musicplayer'
import Search from '../Screen/Search'
import Library from '../Screen/Library'
import Slide from '../components/Slide'
const Tab = createBottomTabNavigator()


export default function Appnavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        paddingTop: 10,
        paddingBottom: 10,
        height: 60,

      },
    }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name='Search' component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' color={color} size={size} />
          ),
        }} />
      <Tab.Screen name='Library' component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" size={size} color={color} />
          ),
        }} />
      <Tab.Screen name='premium' component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='spotify-with-circle' color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}


