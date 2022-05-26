import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NavigationArrow } from 'phosphor-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Appnavigator from './navigation/Appnavigator';
import Home from './Screen/Home';
import LoginScreen from './Screen/LoginScreen';
import Signupscreen from './Screen/Signupscreen';
import { createStackNavigator } from '@react-navigation/stack';
import Songlist from './Screen/Songlist';
import Musicplayer from './Screen/Musicplayer';
import Search from './Screen/Search';
import Library from './Screen/Library';
import Singerlist from './Screen/Singerlist';
import Addplay from './Screen/Addplay';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Appnavigator"
          component={Appnavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Loginscreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signupscreen" component={Signupscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Songlist" component={Songlist} options={{ headerShown: false }} />
        <Stack.Screen name="Musicplayer" component={Musicplayer} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
        <Stack.Screen name="Singerlist" component={Singerlist} options={{ headerShown: false }} />
        <Stack.Screen name="Addplay" component={Addplay} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>


  )

}

