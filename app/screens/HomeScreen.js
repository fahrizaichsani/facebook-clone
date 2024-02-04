import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { AuthContext } from '../contexts/authContext';
import * as SecureStore from 'expo-secure-store';

const GET_POSTS = gql`
query GetPosts {
  getPosts {
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
    Author {
      _id
      name
      username
      email
    }
    createdAt
    updatedAt
  }
}
`

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const authContext = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_POSTS)
  if (loading) return null;
  if (error) {
    console.log(error);
  }
  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* homepage */}
        {/* header */}
        <View style={styles.boxOne}>
          <View style={styles.boxOneChildOne}>
            <Text style={styles.textOne}>
              Fastboots
            </Text>
          </View>
          <View style={styles.boxOneChildTwo}>
            <Ionic name="add-circle-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxOneChildThree}>
            <Ionic name="search-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxOneChildFour}>
            <Ionic name="chatbubble-outline" style={styles.icon}></Ionic>
          </View>
        </View>
        {/* header */}


        {/* navigation */}
        <View style={styles.boxTwo}>
          <View style={styles.boxTwoChildOne}>
            <Ionic name="home-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxTwoChildTwo}>
            <Ionic name="play-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxTwoChildThree}>
            <Ionic name="people-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxTwoChildFour}>
            <Ionic name="storefront-outline" style={styles.icon}></Ionic>
          </View>
          <View style={styles.boxTwoChildFive}>
            <Ionic name="notifications-outline" style={styles.icon}></Ionic>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile", { userId: data.getPosts[0].Author._id })} style={styles.boxTwoChildSix}>
            <Ionic name="person-outline" style={styles.icon}></Ionic>
          </TouchableOpacity>
        </View>
        {/* navigation */}



        {/* add-post */}
        <TouchableOpacity onPress={() => navigation.navigate("AddPost")} style={styles.boxThree}>
          <View style={styles.boxThreeChildOne}>
            <Ionic name="person-circle-outline" style={styles.iconPerson}></Ionic>
          </View>
          <View style={styles.boxThreeChildTwo}>
            <Text style={styles.textTwo}>
              What's on your mind?
            </Text>
          </View>
          <View style={styles.boxThreeChildThree}>
            <Ionic name="images-outline" style={styles.icon}></Ionic>
          </View>
        </TouchableOpacity>
        {/* add-post */}


        {/* post */}
        <View style={styles.boxFive}>
          <View style={[styles.boxFiveChildOne, { width: windowWidth }]}>
            <FlatList data={data.getPosts} keyExtractor={item => item._id} renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Post", { postId: item._id })} style={{
                width: windowWidth,
              }}>
                <View style={styles.boxFiveGrandChildOne}>
                  <View style={styles.boxFiveGreatGrandsonOne}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png',
                      }}
                    />
                  </View>
                  <View style={styles.boxFiveGreatGrandsonTwo}>
                    <Text style={styles.textThree}>
                      {item.Author.username}
                    </Text>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonThree}>
                    <Ionic name="ellipsis-horizontal-outline" style={styles.iconEllipsis}></Ionic>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonFour}>
                    <Ionic name="close-outline" style={styles.iconClose}></Ionic>
                  </View>
                </View>
                <View style={styles.boxFiveGrandChildTwo}>
                  <Text style={styles.textContent}>
                    {item.content}
                  </Text>
                </View>
                <View style={styles.boxFiveGrandChildThree}>
                  <Image
                    style={[styles.image]}
                    source={{
                      uri: item.imgUrl
                    }}
                  />
                </View>
                <View style={styles.boxFiveGrandChildFour}>
                  <TouchableOpacity style={styles.boxFiveGreatGrandsonFive}>
                    <Ionic name="heart-outline" style={styles.icon}></Ionic>
                  </TouchableOpacity>
                  <View style={styles.boxFiveGreatGrandsonSix}>
                    <Text>{item.likes.length}</Text>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonSeven}>
                    <Text>{item.comments.length} comments</Text>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonEight}>
                    <Text>shares</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}>
            </FlatList>
          </View>
        </View>
        {/* post */}
        {/* homepage */}
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  //homepage
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  //header
  boxOne: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    padding: 8,
    gap: 8
  },
  boxOneChildOne: {
    flex: 8,
    backgroundColor: '#ffffff'
  },
  boxOneChildTwo: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOneChildThree: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOneChildFour: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold'
  },
  //header


  //navigation
  boxTwo: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: '#ececec',
    padding: 8,
    gap: 24
  },
  boxTwoChildOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoChildTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoChildThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoChildFour: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoChildFive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoChildSix: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40
  },
  //navigation


  //addpost
  boxThree: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#ececec',
    padding: 8,
    gap: 8
  },
  boxThreeChildOne: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxThreeChildTwo: {
    flex: 5.5,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'left'
  },
  boxThreeChildThree: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPerson: {
    fontSize: 50
  },
  textTwo: {
    fontFamily: 'Cochin',
    fontSize: 20,
    padding: 10,
  },
  //addpost


  //post
  boxFive: {
    flex: 12,
    backgroundColor: '#fff'
  },
  boxFiveChildOne: {
    backgroundColor: '#ffffff'
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
  tinyLogo: {
    width: windowWidth / 7,
    height: windowHeight / 15,
    borderRadius: 100
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
    backgroundColor: '#ffffff',
    padding: 8
  },
  textContent: {
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  boxFiveGrandChildThree: {
    // flex: 2,
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: '#ececec',
  },
  image: {
    width: '100%',
    height: windowHeight / 3
  },
  boxFiveGrandChildFour: {
    // flex: 3,r
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
  //homepage
});