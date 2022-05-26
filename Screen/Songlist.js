import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Appnavigator from '../navigation/Appnavigator'
import { Ionicons } from "react-native-vector-icons"
import { song } from '../data/song'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { PaintBrushHousehold } from 'phosphor-react-native'

export default function Songlist({ navigation }, ...props) {


    return (
        <>
            <SafeAreaView style={styles.first}>
                <ScrollView>
                    <Search />
                    <View style={styles.second}>
                        <SongImage />
                        <Text style={styles.text}>{song[0].name}</Text>
                    </View>
                    <Text style={{ color: "white", marginLeft: 20 }}>By  {song[0].author}</Text>
                    <Text style={{ color: "white", marginLeft: 25 }}>{song[0].duration}</Text>
                    <View style={{ flexDirection: "row", marginLeft: 20, justifyContent: "space-between", marginRight: 20 }}>
                        <View style={{ flexDirection: "row", marginTop: 30 }}>
                            <Icons text={"person-add-outline"} />
                            <Icons text={"ellipsis-vertical-sharp"} />
                        </View>
                        <Rightcomponent
                        />
                    </View>
                    <Musiclist navigation={navigation} />
                </ScrollView>
                <Appnavigator />
            </SafeAreaView>

        </>
    )
}
const SongImage = (props) => (
    <Image source={{ uri: song[0].image }} style={styles.songimage} />

)

const Icons = (props) => (
    <TouchableOpacity>
        <Ionicons name={props.text} size={25} color="white" style={{ margin: 8 }} />
    </TouchableOpacity>

)

const Rightcomponent = (props) => {
    const [play, setPlay] = useState(false)
    return (
        <TouchableOpacity onPress={() => setPlay(value => !value)}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", position: "relative", }}>
                {play ? <Playbutton name="pause-circle" /> : <Playbutton name="play-circle-sharp" />}

            </View>
        </TouchableOpacity>
    )

}


const Search = () => (
    <View style={{ marginTop: 30, }}>
        <View style={{ marginLeft: 5 }}>
            <View style={{ flexDirection: "row", position: "relative" }}>
                <Ionicons name="search" color="white" style={{ left: 25, top: 7, position: "relative" }} size={20} />
                <TextInput placeholder='find in playlist' style={{ borderColor: "white", borderWidth: 2, borderRadius: 10, height: 40, padding: 5, color: "white", width: "75%", paddingLeft: 30, }} placeholderTextColor={"white"} ></TextInput>
                <TouchableOpacity>
                    <Text style={{ color: "white", borderColor: "white", borderWidth: 2, width: 60, padding: 8, borderRadius: 10, paddingLeft: 15, marginLeft: 8 }}>Sort</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>


)

const Playbutton = (props) => (

    <Ionicons name={props.name} color="green" style={{}} size={80} />
)

const Musiclist = ({ navigation }) => (
    <>
        {song.map((song, index) => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 5, }} key={index}>
                <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => {
                    navigation.navigate("Musicplayer", {

                    })
                }}>
                    <Image source={{ uri: song.image }} style={{ height: 60, width: 60 }} />
                    <View style={{ marginLeft: 15, marginTop: 10 }}>
                        <Text style={{ color: "white", alignItems: "center", fontSize: 15, }}>{song.name}</Text>
                        <Text style={{ color: "white", alignItems: "center", fontSize: 15, }}>{song.Singer}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", position: "relative", }}>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-vertical-sharp" size={25} color="white" style={{ margin: 8 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
        )}

    </>
)


const styles = StyleSheet.create({
    first: {
        backgroundColor: "black",
        flex: 1,
        marginTop: 30

    },
    second: {
        alignItems: "center",
        margin: 30
    },
    text: {
        color: "white",
        fontSize: 25,
        margin: 10
    },
    songimage: {
        width: 200,
        height: 200,
        alignItems: "center"
    }
})
