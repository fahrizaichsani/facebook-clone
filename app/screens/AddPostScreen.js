import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { AuthContext } from '../contexts/authContext';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';


const ADD_POST = gql`
mutation AddNewPost($addPost: addPost) {
  addNewPost(addPost: $addPost) {
    _id
    content
    tags
    imgUrl
    authorId
    comments {
      content
      username
      createdAt
      updatedAt
    }
    likes {
      username
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`

export default function AddPostScreen() {
    const navigation = useNavigation()
    const authContext = useContext(AuthContext)
    const [createPost, { data, loading, error }] = useMutation(ADD_POST, {
        refetchQueries: [
            "GetPosts"
        ],
        onCompleted: async (data) => {
            navigation.navigate("Home")
        }
    });
    const [content, setContent] = React.useState('');
    const [imgUrl, setImgUrl] = React.useState('');
    const [tags, setTags] = React.useState('');

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
                        <TouchableOpacity style={styles.boxOneGrandChildOne} onPress={() => {
                            createPost({
                                variables: {
                                    addPost: { content, imgUrl, tags }
                                }
                            })
                        }}>
                            <Text style={styles.textTwo}>
                                POST
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxThree}>
                    <View style={styles.boxThreeChildTwo}>

                    </View>
                    <View style={styles.boxThreeChildThree}>
                        <Text style={styles.textFour}>
                            Content
                        </Text>
                        <TextInput style={styles.inputOne}
                            onChangeText={setContent} 
                            value={content}
                            placeholder="What's on your mind?">
                        </TextInput>
                        <Text style={styles.textFour}>
                            Image Link
                        </Text>
                        <TextInput style={styles.inputTwo}
                            onChangeText={setImgUrl} 
                            value={imgUrl}
                            placeholder="Image Url"
                            >            
                        </TextInput>
                        <Text style={styles.textFour}>
                            Tags
                        </Text>
                        <TextInput style={styles.inputThree}
                            onChangeText={setTags} 
                            value={tags}
                            placeholder="Tags">
                        </TextInput>
                    </View>
                    <View style={styles.boxThreeChildOne}>

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
        flexDirection: 'row',
        marginTop: 20
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
    textfive: {
        color: '#000'
    },
    boxThree: {
        flex: 8,
        backgroundColor: '#fff',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#ececec',
        margin: 35
    },
    boxThreeChildTwo: {
        flex: 2
    },
    boxThreeChildThree: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    textFour: {
        fontFamily: 'Cochin',
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputOne: {
        fontFamily: 'Cochin',
        fontSize: 30
    },
    inputTwo: {
        fontFamily: 'Cochin',
        fontSize: 30
    },
    inputThree: {
        fontFamily: 'Cochin',
        fontSize: 30
    },
    boxThreeChildOne: {
        flex: 5,
    }
});
