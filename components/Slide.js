import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { song } from '../data/song'
import { withTheme } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Slide() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {song.map((song, index) => (
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", borderWidth: 2, borderColor: "white", borderRadius: 10, paddingLeft: 10, marginLeft: 10, flexWrap: "wrap", }} key={index}>
                            <Image source={{ uri: song.image }} style={{ height: 80, width: 80 }} />
                            <Text style={{ color: "white", fontSize: 20, marginTop: 25, margin: 5 }}>{song.Singer.length <= 10 ? song.Singer : song.Singer.slice(0, 10) + "..."}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({})