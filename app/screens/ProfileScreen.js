import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function ProfileScreen() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxOne}>
                    <Text style={styles.textOne}>
                        Profile
                    </Text>
                </View>
                <View style={styles.boxTwo}>
                    <Image style={styles.image}
                        source={{
                            uri: 'https://c4.wallpaperflare.com/wallpaper/1005/822/563/star-wars-death-star-at-at-space-wallpaper-preview.jpg',
                        }}>
                    </Image>
                    <View style={styles.boxTwoChildTwo}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.boxThree}>
                    <View style={styles.boxThreeChildOne}>
                        <Text style={styles.textTwo}>
                            Yoda Green Boy
                        </Text>
                        <Text style={styles.textThree}>
                            @yoda08 - yoda@mail.com
                        </Text>
                        <Text style={styles.textFour}>
                            Couruscant
                        </Text>
                    </View>
                    <View style={styles.boxThreeChildTwo}>
                        <Ionic name="create-outline" style={styles.icon}></Ionic>
                    </View>
                </View>
                <View style={styles.boxFour}>
                    <TouchableOpacity style={styles.boxFourChildOne}>
                        <Text style={styles.textfive}>
                            Followers
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxFourChildTwo}>
                        <Text style={styles.textfive}>
                            Followings
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxFive}>

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
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOne: {
        fontFamily: 'Cochin',
        fontSize: 30,
        fontWeight: 'bold'
    },
    boxTwo: {
        flex: 8
    },
    image: {
        width: windowWidth,
        height: windowHeight / 2,
        position: 'absolute'
    },
    boxTwoChildTwo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: windowWidth / 2,
        height: windowHeight / 4,
        borderRadius: 120,
        borderWidth: 2,
        borderColor: '#ececec',
    },
    boxThree: {
        flex: 1.5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 8
    },
    boxThreeChildOne: {
        flex: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingLeft: 10,
        gap: 6
    },
    boxThreeGrandChildOne: {
        flex: 1.5,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    textTwo: {
        fontFamily: 'Cochin',
        fontSize: 30,
        fontWeight: 'bold'
    },
    boxThreeGrandChildTwo: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textThree: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'bold'
    },
    boxThreeGrandChildThree: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textFour: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'bold'
    },
    boxThreeChildTwo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    icon: {
        fontSize: 40
    },
    boxFour: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 8,
        gap: 4
    },
    boxFourChildOne: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f7ff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        margin: 10
    },
    boxFourChildTwo: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f7ff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        margin: 10
    }, 
    textfive: {
        color: '#000',
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxFive: {
        flex: 2,
        backgroundColor: '#fff'
    },
});