import React from 'react'
import { View, Text, Image, props, TouchableOpacity, ScrollView } from 'react-native'
import LoginScreen from '../Screen/LoginScreen'
import { song } from '../data/song'
import { song2 } from '../data/song2'
import { mix } from '../data/Mix'
import Songlist from '../Screen/Songlist'



const Music = ({ navigation, }, ...props) => {
    return (
        <ScrollView>
            <Album image={props.image} navigation={navigation} />
            <Text style={{ color: "white", fontSize: 40, margin: 30, fontStyle: "italic" }}>Make's for YOU</Text>
            <Albummenu2 navigation={navigation} />
            <Text style={{ color: "white", fontSize: 40, margin: 30, fontStyle: "italic" }}>Hits of legends</Text>
            <Albummenu2 navigation={navigation} />
            <Text style={{ color: "white", fontSize: 40, margin: 30, fontStyle: "italic" }}>Hollywood songs</Text>
            <Albummenu3 navigation={navigation} />
            <Text style={{ color: "white", fontSize: 40, margin: 30, fontStyle: "italic" }}>Party songs mix</Text>
            <Albummenu navigation={navigation} />
        </ScrollView>
    )
}

export const Album = ({ navigation }, props) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("Songlist", {
                name: song.name,
                image: song.image
            })
        }}>
            <View style={{ marginTop: 30, marginLeft: 20, flexDirection: "row", borderWidth: 2, justifyContent: "space-between" }}>
                <Musicimage image={song[0].image} />
                <Musicimage image={song[1].image} /></View>
            <View style={{ marginLeft: 20, flexDirection: "row", borderWidth: 2 }}>
                <Musicimage image={song[3].image} />
                <Musicimage image={song[2].image} />
            </View>
            <MusicInfo name="My favourite songs" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("Songlist")
        }} >
            <View style={{ marginTop: 30, marginLeft: 10, flexDirection: "row", borderWidth: 2 }}>
                <Musicimage image={song2[0].image} />
                <Musicimage image={song2[1].image} /></View>
            <View style={{ marginLeft: 10, flexDirection: "row", borderWidth: 2 }}>
                <Musicimage image={song2[2].image} />
                <Musicimage image={song2[3].image} />
            </View>
            <MusicInfo name="hits songs of 90's" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
            navigation.navigate("Songlist")
        }}>
            <View style={{ marginTop: 30, marginLeft: 10, flexDirection: "row", borderWidth: 2 }}>
                <Musicimage image={song[0].image} />
                <Musicimage image={song[0].image} /></View>
            <View style={{ marginLeft: 10, flexDirection: "row", borderWidth: 2 }}>
                <Musicimage image={song[0].image} />
                <Musicimage image={song[0].image} />
            </View>
            <MusicInfo name="Hits of Sonu Nigam" />
        </TouchableOpacity>
    </ScrollView>

)

export const Albummenu = ({ navigation, ...props }) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10, marginRight: 20 }}>
            {song.map((song, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Songlist", {
                            name: song.name,
                            image: song.image,
                        })
                    }} >
                        <View >
                            <Image source={{ uri: song.image }} style={{ height: 120, width: 120, borderWidth: 3, marginRight: 30, marginLeft: 20 }} />
                        </View>
                        <Text style={{ color: "white" }}> {song.name}</Text>
                    </TouchableOpacity>
                </View>
            )
            )}
        </View>
    </ScrollView>

)


export const Albummenu2 = ({ navigation, ...props }) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30, }}>
            {song2.map((song2, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Loginscreen") }} >
                        <View >
                            <Image source={{ uri: song2.image }} style={{ height: 120, width: 120, borderWidth: 3, marginLeft: 20, marginRight: 20 }} />
                        </View>
                        <Text style={{ color: "white" }}> {song2.name}</Text>
                    </TouchableOpacity>

                </View>
            )
            )}
        </View>
    </ScrollView>

)

export const Albummenu3 = ({ navigation, ...props }) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30, }}>
            {mix.map((mix, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Loginscreen") }} >
                        <View >
                            <Image source={{ uri: mix.image }} style={{ height: 120, width: 120, borderWidth: 3, marginLeft: 20, marginRight: 20 }} />
                        </View>
                        <Text style={{ color: "white" }}> {mix.name}</Text>
                    </TouchableOpacity>

                </View>
            )
            )}
        </View>
    </ScrollView>

)


const Musicimage = (props) => (
    <>
        <Image source={{ uri: props.image }}
            style={{ height: 80, width: 80, borderWidth: 1, borderColor: "black" }} />
    </>
)
const MusicInfo = (props) => (
    <View>
        <Text style={{ marginLeft: 1, fontWeight: "bold", color: "white" }}>{props.name}</Text>
    </View>
)

export default Music
