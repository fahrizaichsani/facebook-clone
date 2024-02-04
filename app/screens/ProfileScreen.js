import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../contexts/authContext';
import * as SecureStore from 'expo-secure-store';
import { gql, useQuery } from '@apollo/client';

const GET_USER_BY_ID = gql`
query GetUser($id: ID) {
  getUser(_id: $id) {
    _id
    name
    username
    email
    DataFollowing {
      _id
      name
      username
      email
    }
    DataFollower {
      _id
      name
      username
      email
    }
  }
}
`

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function ProfileScreen({ _id }) {
    const authContext = useContext(AuthContext)
    const navigation = useNavigation()
    const route = useRoute()
    const { userId } = route.params
    
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { id:  userId }
    });


    if (loading) return <ActivityIndicator size={'large'} color={'black'} />;
    if (error) return <Text>Error : {error.message}</Text>;
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxOne}>
                    <View style={styles.boxOneChildOne}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                            <Ionic name="arrow-back-outline" style={styles.icon}></Ionic>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxOneChildTwo}>
                        <Text style={styles.textOne}>
                            Profile
                        </Text>
                    </View>
                    <View style={styles.boxOneChildThree}>

                    </View>
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
                                uri: 'https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.boxThree}>
                    <View style={styles.boxThreeChildOne}>
                        <Text style={styles.textTwo}>
                            {data.getUser.username}
                        </Text>
                        <Text style={styles.textThree}>
                            {data.getUser.name} - {data.getUser.email}
                        </Text>
                        <Text style={styles.textFour}>
                           
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
                    <TouchableOpacity style={styles.boxFiveChildOne}
                        onPress={async () => {
                            await SecureStore.deleteItemAsync('access_token')
                            authContext.setIsSignedIn(false)
                        }
                        }>
                        <Text style={styles.textSix}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
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
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8
    },
    boxOneChildOne: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    boxOneChildTwo: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxOneChildThree: {
        flex: 1
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
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    boxFiveChildOne: {
        flex: 1,
        backgroundColor: '#B23B3B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cbcbcd',
        marginRight: 150,
        marginLeft: 150,
        marginTop: 30,
        marginBottom: 30
    },
    textSix: {
        color: '#fff',
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold'
    }
});