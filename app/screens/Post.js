import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS_BY_ID = gql`
query GetPostById($id: ID) {
  getPostById(_id: $id) {
    _id
    authorId
    comments {
      content
      username
      createdAt
      updatedAt
    }
    content
    createdAt
    imgUrl
    likes {
      username
      createdAt
      updatedAt
    }
    tags
    updatedAt
    Author {
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

export default function Post({ _id }) {
    const navigation = useNavigation();
    const route = useRoute()
    const { postId } = route.params

    const { loading, error, data } = useQuery(GET_POSTS_BY_ID, {
        variables: { id: postId }
    });

    if (loading) return <ActivityIndicator size={'large'} color={'black'} />;
    if (error) return <Text>Error : {error.message}</Text>;
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.boxOne}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.boxOneChildOne}>
                        <Ionic name="arrow-back-outline" style={styles.icon}></Ionic>
                    </TouchableOpacity>
                    <View style={styles.boxOneChildTwo}>
                        <Text style={styles.textOne}>
                            Post
                        </Text>
                    </View>
                    <View style={styles.boxOneChildThree}>

                    </View>
                </View>
                <View style={styles.boxTwo}>
                    <View style={styles.boxTwoChildOne}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png',
                            }}
                        />
                    </View>
                    <View style={styles.boxTwoChildTwo}>
                        <Text style={styles.textThree}>
                            {data.getPostById.Author.username}
                        </Text>
                    </View>
                    <View style={styles.boxFiveGreatGrandsonThree}>
                        <Ionic name="ellipsis-horizontal-outline" style={styles.iconEllipsis}></Ionic>
                    </View>
                    <View style={styles.boxFiveGreatGrandsonFour}>
                        <Ionic name="close-outline" style={styles.iconClose}></Ionic>
                    </View>
                </View>
                <View style={styles.boxFiveChildOne}>
                    <View style={styles.boxFiveGrandChildTwo}>
                        <Text style={styles.textContent}>
                            {data.getPostById.content}
                        </Text>
                    </View>
                    <View style={styles.boxFiveGrandChildThree}>
                        <Image
                            style={[styles.image]}
                            source={{
                                uri: data.getPostById.imgUrl
                            }}
                        />
                    </View>
                    <View style={styles.boxFiveGrandChildFour}>
                        <TouchableOpacity style={styles.boxFiveGreatGrandsonFive}>
                            <Ionic name="heart-outline" style={styles.icon}></Ionic>
                        </TouchableOpacity>
                        <View style={styles.boxFiveGreatGrandsonSix}>
                            <Text>{data.getPostById.likes.length}</Text>
                        </View>
                        <View style={styles.boxFiveGreatGrandsonSeven}>
                            <Text>{data.getPostById.comments.length} comments</Text>
                        </View>
                        <View style={styles.boxFiveGreatGrandsonEight}>
                            <Text>shares</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxFiveChildTwo}>
                    <FlatList
                        data={data.getPostById.comments}
                        renderItem={({ item }) => (
                            <View style={styles.boxFiveChildThree}>
                                <Text style={styles.boxFiveChildFive}>{item.username}</Text>
                                <Text style={styles.boxFiveChildSix}>{item.content}</Text>
                            </View>
                        )}
                        keyExtractor={item => item._id}
                    />
                </View>
            </SafeAreaView >
        </>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: 30
    },
    boxOne: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ececec'
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
    textTwo: {
        color: '#fff',
        fontWeight: 'bold'
    },
    boxTwo: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
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
        flex: 3
    },

    boxFiveChildOne: {
        width: windowWidth,
        height: windowHeight / 2,
        backgroundColor: '#fff'
    },
    //postheader
    boxFiveGrandChildOne: {
        flex: 4,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        padding: 4
    },
    boxFiveGreatGrandsonOne: {
        flex: 2,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: "left",
        paddingLeft: 8
    },
    boxFiveGreatGrandsonTwo: {
        flex: 6,
        backgroundColor: '#ffffff',
        paddingTop: 8
    },
    textThree: {
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxFiveGreatGrandsonThree: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingTop: 2
    },
    iconEllipsis: {
        fontSize: 20
    },
    boxFiveGreatGrandsonFour: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingTop: 2
    },
    iconClose: {
        fontSize: 20
    },
    //postheader


    //content
    boxFiveGrandChildTwo: {
        width: windowWidth,
        backgroundColor: '#ffffff',
        padding: 8
    },
    textContent: {
        fontFamily: 'Cochin',
        fontWeight: 'bold'
    },
    boxFiveGrandChildThree: {
        width: windowWidth,
        height: windowHeight /  3,
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderBottomColor: '#ececec',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    boxFiveGrandChildFour: {
        width: windowWidth,
        height: windowHeight / 15,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    //content


    //postFooter
    boxFiveGreatGrandsonFive: {
        flex: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxFiveGreatGrandsonSix: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center'
    },
    boxFiveGreatGrandsonSeven: {
        flex: 12,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    boxFiveGreatGrandsonEight: {
        flex: 4,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16
    },
    //postFooter
    //post

    boxFiveChildTwo: {
        flex: 5,
        backgroundColor: '#fff'
    },
    boxFiveChildThree: {
        padding: 5,
        borderColor: '#ececec',
        borderWidth: 3,
    },
    boxFiveChildFive: {
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8
    },
    boxFiveChildSix: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'bold',
    }
});