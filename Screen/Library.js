import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import tw from 'twrnc'
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { Divider } from 'react-native-elements'
import { song } from '../data/song'

export default function Library({ navigation }) {
    return (
        <SafeAreaView style={[tw`bg-white flex-1 `, { paddingTop: Constants.statusBarHeight }]}>
            <View style={tw`bg-black flex-1`}>
                <ScrollView style={tw``} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", padding: 30, alignContent: "center", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                            <TouchableOpacity >
                                <Text style={{
                                    borderRadius: 50,
                                    width: 40,
                                    height: 40,
                                    borderWidth: 1,
                                    backgroundColor: '#ab0f62',
                                    marginTop: 8,
                                    paddingLeft: 10,
                                    fontSize: 30,
                                    alignItems: "center",
                                    marginBottom: 2,
                                }}>A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Your Library</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Ionicons name="search-sharp" size={25} color={"white"} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => (
                                navigation.navigate("Addplay")
                            )}>
                                <Ionicons name="add-sharp" size={35} color={"white"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons name='arrow-up' size={20} color={"white"} />
                                <Ionicons name='arrow-down' size={20} color={"white"} />
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: 15, marginLeft: 10, fontWeight: "bold", }}>Recentely played</Text>
                        </View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            navigation.navigate("Songlist", {
                                name: song.name,
                                image: song.image
                            })
                        }}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                <View>
                                    <View style={{ marginTop: 30, marginLeft: 20, flexDirection: "row", borderWidth: 2, }}>
                                        <Musicimage image={song[0].image} />
                                        <Musicimage image={song[1].image} />
                                    </View>
                                    <View style={{ marginLeft: 20, flexDirection: "row", borderWidth: 2 }}>
                                        <Musicimage image={song[3].image} />
                                        <Musicimage image={song[2].image} />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: "white", fontSize: 15 }}>My favourite songs</Text>
                                    <Text style={{ color: "white", fontSize: 15 }}>playlist {song[0].author}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 20, marginLeft: 35, }} onPress={() => {
                            navigation.navigate("Singerlist")
                        }}>
                            <Ionicons name='md-add-circle-outline' size={60} color={"grey"} />
                            <Text style={{ color: "white", fontSize: 15 }}>Add Artists</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 10, marginLeft: 35, }}>
                            <Octicons name='diff-added' size={60} color={"grey"} />
                            <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Add Prodcast and shows</Text>
                        </TouchableOpacity>
                    </>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const Musicimage = (props) => (
    <>
        <Image source={{ uri: props.image }}
            style={{ height: 50, width: 50, borderWidth: 1, borderColor: "black" }} />
    </>
)

const styles = StyleSheet.create({})
