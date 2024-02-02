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
                    <Image style={styles.image}
                        source={{
                            uri: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
                        }}>
                    </Image>
                </View>
                <View style={styles.boxTwo}>

                </View>
                <View style={styles.boxThree}>

                </View>
                <View style={styles.boxFour}>

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
        flex: 2.5,
        backgroundColor: 'gray'
    },
    image: {
        width: '100%',
        height: windowHeight / 3
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'red'
    },
    boxFour: {
        flex: 3,
        backgroundColor: 'black'
    },
});