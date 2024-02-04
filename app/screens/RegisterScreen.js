import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionic from "react-native-vector-icons/Ionicons";
import { gql, useMutation } from '@apollo/client';
import { AuthContext } from '../contexts/authContext';

const REGISTER = gql`
mutation Register($newUser: newUser) {
  register(newUser: $newUser) {
    _id
    name
    username
    email
  }
}
`

export default function RegisterScreen() {
    const navigation = useNavigation()
    const [createUser, { data, loading, error }] = useMutation(REGISTER, {
        onCompleted: async (data) => {
            console.log(data, "INII DATAAA");
            navigation.navigate("Login")
        }
    });
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* register */}
                <View style={styles.boxOne}>
                    <View style={styles.boxChildOne}>

                    </View>
                    <View style={styles.boxChildTwo}>
                        <Text style={styles.textOne}>
                            Fastboots
                        </Text>
                    </View>
                    <View style={styles.boxChildThree}>
                        <TextInput style={styles.boxGrandChildOne} onChangeText={setEmail}
                            value={email}
                            placeholder="email"
                            autoCapitalize='none'
                            >
                        </TextInput>
                    </View>
                    <View style={styles.boxChildFour}>
                        <TextInput style={styles.boxGrandChildTwo} onChangeText={setName}
                            value={name}
                            placeholder="name">

                        </TextInput>
                    </View>
                    <View style={styles.boxChildFive}>
                        <TextInput style={styles.boxGrandChildThree} onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                            placeholder="password">
                        </TextInput>
                    </View>
                    <View style={styles.boxChildSix}>
                        <TextInput style={styles.boxGrandChildFour} onChangeText={setUsername}
                            value={username}
                            placeholder="username">
                        </TextInput>
                    </View>
                    <View style={styles.boxChildSeven}>
                        <TouchableOpacity style={styles.boxGrandChildFive} onPress={() => {
                            createUser({
                                variables: {
                                    newUser: { email, name, password, username }
                                }
                            })
                        }}>
                            <Text style={styles.textTwo} >
                                REGISTER
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxChildEight}>
                        <Text style={styles.textThree}>
                            or
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.boxChildNine}>
                        <Text style={styles.textFour}>
                            Already have an account
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.boxChildTen}>

                    </View>
                </View>
                {/* register */}

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    //register
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
        fontSize: 25,
        fontFamily: 'Cochin',
        paddingLeft: 12,
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
        fontSize: 25,
        fontFamily: 'Cochin',
        paddingLeft: 12,
    },
    boxChildFive: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12
    },
    boxGrandChildThree: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#cbcbcd',
        fontSize: 25,
        fontFamily: 'Cochin',
        paddingLeft: 12,
    },
    boxChildSix: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12
    },
    boxGrandChildFour: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#cbcbcd',
        fontSize: 25,
        fontFamily: 'Cochin',
        paddingLeft: 12,
    },
    boxChildSeven: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 120,
        paddingRight: 120,
        marginTop: 20
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
    //register
});
