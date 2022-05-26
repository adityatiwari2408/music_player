import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import tw from 'twrnc'
import Constants from 'expo-constants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { search } from '../data/search'
import { song } from '../data/song'

export default function Search() {
    return (
        <SafeAreaView style={[tw`bg-white flex-1 `, { paddingTop: Constants.statusBarHeight }]}>
            <View style={tw`bg-black flex-1`}>
                <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
                    <Text style={{ color: "white", fontSize: 30, padding: 30, fontWeight: "bold" }}>Search</Text>
                    <View>
                        <Ionicons
                            name='search-sharp'
                            color={"black"}
                            size={20}
                            style={tw`absolute left-8 z-10 top-3 self-center`} />
                        <TextInput style={[tw`ml-5 py-2 px-5 pl-10 bg-gray-100 mr-5 `, styles.input]}
                            placeholder='Artists,Song or Prodcast' />
                    </View>
                    <Text style={[tw`text-lg mt-2 ml-4 mt-10 mb-10`, { color: "white" }]}>Your top Genres</Text>
                    <View style={tw`flex-row mx-6 flex-wrap justify-between`}>
                        {search.map((search, index) => (
                            <TouchableOpacity style={tw`  `} key={index}>
                                <View style={tw`rounded-lg overflow-hidden justify-center items-center`}>
                                    <Image source={{ uri: search.image }} style={{ height: 130, width: 130, margin: 10 }} />
                                    <View
                                        style={[
                                            tw`absolute top-0 left-0 w-full h-full bg-black rounded-lg z-10`,
                                            { opacity: 0.5 },
                                        ]} />
                                    <Text
                                        style={tw`absolute self-center text-white w-3/4 text-center z-20`}
                                        numberOfLines={2}
                                    >
                                        {search.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                </ScrollView>
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 2

    }

})
