import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { song } from '../data/song';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { search } from '../data/search';
import { TextAlignJustify } from 'phosphor-react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

var { width, height } = Dimensions.get("window");
export default function Singerlist() {
    const [checked, setchecked] = useState(false);
    return (
        <SafeAreaView style={[tw`bg-white flex-1 `, { paddingTop: Constants.statusBarHeight }]}>
            <View style={[tw`bg-black flex-1`]}>
                <Text style={{ margin: 10, fontSize: 30, fontStyle: "italic", fontWeight: "bold", color: "white", paddingTop: 10 }}>Choose more artist you like</Text>
                <View>
                    <Ionicons name='search-outline'
                        color={"black"}
                        size={20}
                        style={tw`absolute left-8 z-10 top-3 self-center`} />
                    <TextInput style={[tw`ml-5 py-2 px-5 pl-10 bg-gray-100 mr-5`, styles.input]}
                        placeholder='Search' placeholderTextColor={"black"} />

                </View>



                <View style={{ margin: 10, }}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={tw`flex-row mx-7 flex-wrap justify-between`}>
                            {search.map((search, index) => (
                                <TouchableOpacity key={index} style={[tw`w-3/3`]} onPress={() => (checked)} >
                                    {checked ? <BouncyCheckbox
                                        iconStyle={{
                                            borderColor: "lightgray",
                                            borderRadius: 10, fillColor: "green"
                                        }} /> : <BouncyCheckbox
                                        iconStyle={{
                                            borderColor: "lightgray",
                                            borderRadius: 10, fillColor: "green"
                                        }} />}
                                    <View style={tw`rounded-lg overflow-hidden justify-center items-center`}>
                                        <Image source={{ uri: search.image }} style={{ height: 120, width: 120, marginRight: 10, marginLeft: 10, borderRadius: 70 }} />
                                    </View>
                                    <Text style={{ color: "white", marginLeft: 20, marginRight: 20, fontSize: 15, fontWeight: "bold", alignSelf: "center" }}>{search.title}</Text>
                                </TouchableOpacity>

                            ))}
                        </View>
                    </ScrollView>
                </View>

            </View>
            <View style={[tw`bg-white absolute bottom-4 self-center rounded-full`]}>
                <TouchableOpacity style={[tw` py-3 px-12 rounded-full z-50`]}>
                    <View >
                        <Text style={tw`text-black text-sm fw-bold`}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
        color: "white",
        borderRadius: 5,
        borderWidth: 1

    }

});
