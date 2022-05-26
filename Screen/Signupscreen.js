import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import { Label, Logo } from './LoginScreen'
import { MaterialIcons } from "react-native-vector-icons"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export default function Signupscreen({ navigation }) {
    return (
        <ScrollView>
            <SafeAreaView style={{ marginTop: 20 }}>
                <View>
                    <Logo />
                    <Label text="Name" />
                    <Tag text={"enter your name"} />
                    <Label text="Email" />
                    <Tag text={"enter your E-mail"} icons="mail" />
                    <Label text="Confirm your Password" />
                    <Tag text={"enter your password"} entry={true} icons="remove-red-eye" />
                    <Label text="Confirm your password" />
                    <Tag text={"confirm your password"} entry={true} icons="remove-red-eye" />
                    <Signup />
                    <Text style={{
                        marginTop: 16,
                        textAlign: 'center',
                        headerShown: false
                    }}>
                        Already registered user?{' '}
                        <Text
                            onPress={() => navigation.navigate('Loginscreen')}
                            style={{ color: "blue" }}
                        >
                            Login
                        </Text>
                    </Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const Tag = (props) => (
    <View style={{ flexDirection: "row", position: "relative" }}>
        <TextInput placeholder={props.text} style={{ margin: 20, marginTop: 10, height: 50, width: 200, alignSelf: "center", padding: 15, flex: 1, borderWidth: 2, borderRadius: 15 }} secureTextEntry={props.entry ? props.entry : false}>
        </TextInput>
        <TouchableOpacity>
            <MaterialIcons name={props.icons} style={{ position: "absolute", right: 24, top: 26 }} size={30} />
        </TouchableOpacity>
    </View>
)

const Signup = () => (

    <TouchableOpacity style={styles.click}>
        <View style={styles.View}>
            <Text style={styles.font}>Signup</Text>
        </View>
    </TouchableOpacity>
)



const styles = StyleSheet.create({
    click: {
        backgroundColor: "#70e000",
        borderRadius: 15,
        margin: 20,
        marginTop: 10,

    },
    View: {
        margin: 10, position: "relative"
    },
    font: {
        fontSize: 20, textAlign: "center"
    }
})
