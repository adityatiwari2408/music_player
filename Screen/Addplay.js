import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Addplay = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View>
                <Text style={{ color: "white", fontSize: 25, fontStyle: "italic", fontWeight: "bold" }}>Give your playlist a name.</Text>
                <TextInput style={{ width: "100%", height: 80, marginTop: 30, borderBottomWidth: 1, color: "white", padding: 10, fontSize: 20, borderBottomColor: "grey", }} placeholderTextColor={"green"} fontSize={10} />
                <View style={{ marginTop: 50, flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => (
                        navigation.navigate("Library")
                    )}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: "green", fontSize: 25, fontWeight: "bold" }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Addplay