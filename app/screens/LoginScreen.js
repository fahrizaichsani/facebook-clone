import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { AuthContext } from '../contexts/authContext';
import { gql, useMutation } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';

const LOGIN = gql`
mutation Login($loginUser: loginUser) {
  login(loginUser: $loginUser) {
    access_token
  }
}
`
export default function LoginScreen() {
    const authContext = useContext(AuthContext)
    const [login, { data, loading, error }] = useMutation(LOGIN, {
        onCompleted: async (data) => {
            await SecureStore.setItemAsync('access_token', data.login.access_token)
            authContext.setIsSignedIn(true)
        }
    });
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation()

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
                        <TextInput placeholder='username' style={styles.boxGrandChildOne} onChangeText={setUsername} value={username}>

                        </TextInput>
                    </View>
                    <View style={styles.boxChildFour}>
                        <TextInput placeholder='password' secureTextEntry style={styles.boxGrandChildTwo} onChangeText={setPassword} value={password}>

                        </TextInput>
                    </View>
                    <View style={styles.boxChildSeven}>
                        <TouchableOpacity style={styles.boxGrandChildFive} onPress={() => {
                            login({
                                variables: {
                                    loginUser: { username, password }
                                }
                            })
                        }}>
                            <Text style={styles.textTwo}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxChildEight}>
                        <Text style={styles.textThree}>
                            or
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.boxChildNine}>
                        <Text style={styles.textFour}>
                            Create new account
                        </Text>
                    </TouchableOpacity>
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
        fontFamily: 'Cochin',
        padding: 12,
        fontSize: 30
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
        fontFamily: 'Cochin',
        padding: 12,
        fontSize: 30
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
