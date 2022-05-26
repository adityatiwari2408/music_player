import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/Header'
import { Divider } from 'react-native-elements'
import Music from '../components/Music'
import { NavigationContainer } from '@react-navigation/native'
import Appnavigator from '../navigation/Appnavigator'
import Slide from '../components/Slide'


export default function Home({ navigation }) {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 30 }}>
            <View style={{ backgroundColor: "black", flex: 1 }}>
                <ScrollView>
                    <Header />
                    <Slide />
                    <Music navigation={navigation} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
