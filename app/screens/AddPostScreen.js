import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function AddPostScreen() {
    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation()

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxOne}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.boxOneChildOne}>
                        <Ionic name="arrow-back-outline" style={styles.icon}></Ionic>
                    </TouchableOpacity>
                    <View style={styles.boxOneChildTwo}>
                        <Text style={styles.textOne}>
                            Create Post
                        </Text>
                    </View>
                    <View style={styles.boxOneChildThree}>
                        <TouchableOpacity style={styles.boxOneGrandChildOne} >
                            <Text style={styles.textTwo}>
                                POST
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxTwo}>
                    <View style={styles.boxTwoChildOne}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
                            }}
                        />
                    </View>
                    <View style={styles.boxTwoChildTwo}>
                        <Text style={styles.textThree}>
                            Yoda GreenBoy
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.boxTwoChildThree}>
                        <Text style={styles.textfive}>
                            Add Image
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxThree}>
                    <TextInput
                        style={styles.inputOne}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="What's on your mind?"
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    boxOne: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 5,
        gap: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ececec',
    },
    boxOneChildOne: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
    },
    boxOneChildTwo: {
        flex: 8,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginLeft: 20
    },
    textOne: {
        fontFamily: 'Cochin',
        fontSize: 25,
        fontWeight: 'bold'
    },
    boxOneChildThree: {
        flex: 2,
        backgroundColor: '#fff',
        marginRight: 8
    },
    boxOneGrandChildOne: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5371b5',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        marginTop: 15,
        marginBottom: 15
    },
    textTwo: {
        color: '#fff',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 30
    },
    boxTwo: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    boxTwoChildOne: {
        flex: 2,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: "left",
        paddingLeft: 8
    },
    tinyLogo: {
        width: 70,
        height: 70,
        borderRadius: 100
    },

    boxTwoChildTwo: {
        flex: 6,
        backgroundColor: '#ffffff',
        paddingTop: 8,
        paddingLeft: 8
    },
    textThree: {
        fontFamily: 'Cochin',
        fontSize: 22,
        fontWeight: 'bold'
    },
    boxTwoChildThree: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f7ff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 8
    },
    textfive: {
        color: '#000'
    },
    boxThree: {
        flex: 8,
        backgroundColor: '#fff',
        padding: 12
    },
    inputOne: {
        fontFamily: 'Cochin',
        fontSize: 35
    }
});
