import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from "react-native-vector-icons"
import { EvilIcons, Fontisto, MaterialIcons } from "react-native-vector-icons"
import { song } from '../data/song'
import Appnavigator from '../navigation/Appnavigator'
import Slider from '@react-native-community/slider'



const Musicplayer = (route, props) => {

    return (
        <SafeAreaView style={{ marginTop: 30, backgroundColor: "black", flex: 1 }}>
            <Playerheader text="My favourite" />
            <MusicPlayerimage />
            <Slidersection />
            <Controlpanel />
            <Bottom />
        </SafeAreaView>


    )
}

const Playerheader = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={{ marginLeft: 20 }}>
            <Ionicons name="chevron-down" size={25} color="white" style={{ margin: 8 }} />
        </TouchableOpacity>
        <Headerplayer text={props.text} />
        <View>
            <TouchableOpacity style={{ marginLeft: 20 }}>
                <Ionicons name="ellipsis-vertical-sharp" size={25} color="white" style={{ margin: 8 }} />
            </TouchableOpacity>
        </View>

    </View>
)

const Headerplayer = (props) => (
    <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15, color: "white", }}>Playing form playlist</Text>
        <Text style={{ fontSize: 15, color: "white", }}>{props.text}</Text>
    </View>
)

const MusicPlayerimage = () => {
    const [like, setlike] = useState(false)
    return (
        <View>
            <Image source={{ uri: song[0].image }} style={{ height: 300, width: 300, alignSelf: "center", marginTop: 30, marginBottom: 30 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 20 }}>
                <View>
                    <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>{song[0].name}</Text>
                    <Text style={{ fontSize: 15, color: "white", marginLeft: 20 }}>{song[0].Singer}</Text>
                </View>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => setlike(value => !value)}>
                    {like ? <Ionicons name="heart-sharp" size={38} color="green" style={{ margin: 8 }} /> : <Ionicons name="heart-outline" size={38} color="white" style={{ margin: 8 }} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}


const Controlpanel = () => {

    const [play, setplay] = useState(false)
    const [suffle, setsuffle] = useState(false)
    const [repeat, setrepeat] = useState(false)
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15, alignItems: "center", }}>
            <TouchableOpacity onPress={() => setsuffle(value => !value)}>
                {suffle ? <Ionicons name="shuffle" size={30} color={"green"} style={{ margin: 8 }} /> : <Ionicons name="shuffle" size={30} color={"white"} style={{ margin: 8 }} />}

            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="ios-play-skip-back-sharp" size={30} color={"white"} style={{ margin: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setplay(value => !value)}>
                <View>
                    {play ? <Ionicons name="pause-circle-sharp" size={80} color={"white"} style={{ margin: 8 }} /> :
                        <Ionicons name="play-circle-sharp" size={80} color={"white"} style={{ margin: 8 }} />
                    }
                </View>

            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="ios-play-skip-forward-sharp" size={30} color={"white"} style={{ margin: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setrepeat(value => !value)}>
                {repeat ? <Ionicons name="ios-repeat" size={30} color={"green"} style={{ margin: 8 }} /> : <Ionicons name="ios-repeat" size={30} color={"white"} style={{ margin: 8 }} />}
            </TouchableOpacity>

        </View>
    )

}

const Bottom = () => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity>
            <MaterialIcons name="computer" color="white" style={{ margin: 8 }} size={22} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity>
                <Ionicons name="share-social-outline" color="white" style={{ margin: 8 }} size={18} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Fontisto name="play-list" color="white" style={{ margin: 8 }} size={18} />
            </TouchableOpacity>
        </View>
    </View>

)

const Slidersection = () => (
    <>
        <Slider
            minimumValue={0}
            maximumValue={1}
            value={0.5}
            maximumTrackTintColor={"white"}
            minimumTrackTintColor='green'
            thumbTintColor='white'
            style={{ marginTop: 20, marginLeft: 10, marginRight: 10, }}
        ></Slider>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10 }}>
            <Text style={{ color: "white", fontSize: 12 }}>0:00</Text>
            <Text style={{ color: "white", fontSize: 12 }}>3:17</Text>
        </View>
    </>
)
export default Musicplayer

const styles = StyleSheet.create({})

