import React from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, props, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image //source={require("../assets/spotify.png")} 
            style={{ width: 50, height: 40, resizeMode: "contain" }} />
          <Text style={{ fontSize: 25, fontStyle: "italic", color: "white" }}>PlayMusic</Text>
        </View>
        <Rightcomponent />
      </View>
    </SafeAreaView>
  )
}

const Icon = (props) => (
  <TouchableOpacity style={{ marginLeft: 3 }}>
    <EvilIcons name={props.name} size={30} color={"white"} />
  </TouchableOpacity>
)

const Rightcomponent = () => (
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", position: "relative", }}>

    <Icon name={"clock"} />
    <Icon name={"bell"} />
    <Icon name={"gear"} />

  </View>
)

export default Header
