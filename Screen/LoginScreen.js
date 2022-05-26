import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Eye } from 'phosphor-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={{ marginTop: 30 }}>
            <Logo />
            <Label text="Email" />
            <EmailTag text=" enter your  e-mail" />
            <Label text="Password" />
            <Inputtag text="enter your  Password...." />
            <Logintab />
            <Text style={{
                marginTop: 16,
                textAlign: 'center',
                headerShown: false
            }}>
                Not a member?{' '}
                <Text
                    onPress={() => navigation.navigate('Signupscreen')}
                    style={{ color: "blue" }}
                >
                    Sign-Up
                </Text>
            </Text>
        </SafeAreaView>
    )
}

export const Logo = (props) => (
    <View>
        <Image source={require("../assets/spotify.png")} style={{ height: 150, width: 150, marginTop: 50, alignSelf: "center" }} />
    </View>
)

const Inputtag = (props) => (
    <View style={{ flexDirection: "row", position: "relative" }}>
        <TextInput placeholder={props.text} style={{ height: 50, width: 280, borderWidth: 2, alignSelf: "center", borderRadius: 15, margin: 20, padding: 15, flex: 1 }} secureTextEntry={true}></TextInput>
        <TouchableOpacity>
            <Eye style={{ position: "absolute", right: 24, top: 32 }} />
        </TouchableOpacity>
    </View>
)

const EmailTag = (props) => (
    <View style={{ flexDirection: "row", position: "relative" }}>
        <TextInput placeholder="enter your email" style={{ height: 50, width: 280, borderWidth: 2, alignSelf: "center", borderRadius: 15, margin: 20, padding: 15, flex: 1 }} />
        <MaterialIcons name="account-circle" style={{ position: "absolute", right: 24, top: 30 }} size={30} />
    </View>
)

const Logintab = () => (
    <TouchableOpacity style={{ backgroundColor: "blue", borderRadius: 15, margin: 20 }}>
        <View style={{ margin: 10, position: "relative" }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Login</Text>
        </View>
    </TouchableOpacity>
)

export const Label = (props) => (
    <View>
        <Text style={{ fontSize: 20, margin: 20, marginBottom: 3, marginTop: 0 }}>{props.text}</Text>
    </View>
)