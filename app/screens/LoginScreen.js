import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";

export default function LoginScreen() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxOne}>
                    <View style={styles.boxChildOne}>

                    </View>
                    <View style={styles.boxChildTwo}>
                        <Text style={styles.textOne}>
                            Fastboots
                        </Text>
                    </View>
                    <View style={styles.boxChildThree}>
                        <View style={styles.boxGrandChildOne}>

                        </View>
                    </View>
                    <View style={styles.boxChildFour}>
                        <View style={styles.boxGrandChildTwo}>

                        </View>
                    </View>
                    <View style={styles.boxChildSeven}>
                        <View style={styles.boxGrandChildFive}>
                            <Text style={styles.textTwo}>
                                LOGIN
                            </Text>
                        </View>
                    </View>
                    <View style={styles.boxChildEight}>
                        <Text style={styles.textThree}>
                            or
                        </Text>
                    </View>
                    <View style={styles.boxChildNine}>
                        <Text style={styles.textFour}>
                            Create new account
                        </Text>
                    </View>
                    <View style={styles.boxChildTen}>

                    </View>
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
        backgroundColor: '#ffffff',
        gap: 12
    },
    boxChildOne: {
        flex: 3,
        backgroundColor: '#ffffff',
    },
    boxChildTwo: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOne: {
        fontFamily: 'Cochin',
        fontSize: 40
    },
    boxChildThree: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12
    },
    boxGrandChildOne: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#cbcbcd',
    },
    boxChildFour: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12
    },
    boxGrandChildTwo: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#cbcbcd',
    },
    boxChildSeven: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 120,
        paddingRight: 120,
        marginTop: 5
    },
    boxGrandChildFive: {
        flex: 1,
        backgroundColor: '#5371b5',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTwo: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#ffffff'
    },
    boxChildEight: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textThree: {
        fontFamily: 'Cochin',
        fontSize: 20
    },
    boxChildNine: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    textFour: {
        fontFamily: 'Cochin',
        fontSize: 25,
        color: '#5371b5',
        fontWeight: 'bold'
    },
    boxChildTen: {
        flex: 3,
        backgroundColor: '#ffffff',
    }
});