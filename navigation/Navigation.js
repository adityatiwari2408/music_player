import React from 'react'
import { View, Text } from 'react-native'
import LoginScreen from '../Screen/LoginScreen'
import Home from '../Screen/Home';
import Signupscreen from '../Screen/Signupscreen';
import Songlist from '../Screen/Songlist';
import { createStackNavigator } from '@react-navigation/stack'

const Navigation = () => {
  {
    const Stack = createStackNavigator();

    const screenOptions = {
      headerShown: false,
    };

    return (
      // <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginscreen" screenOptions={screenOptions}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Loginscreen" component={LoginScreen} />
        <Stack.Screen name="Signupscreen" component={Signupscreen} />
        {/* <Stack.Screen name="StoryScreen" component={Songlist}/> */}
      </Stack.Navigator>
      // </NavigationContainer>

    );
  }

}


export default Navigation
