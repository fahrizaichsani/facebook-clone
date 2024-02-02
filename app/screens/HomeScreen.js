import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    content: "Et eu ullamco ex ullamco. Irure est mollit Lorem ipsum nisi cupidatat qui in aute labore. Tempor adipisicing et dolore exercitation est ipsum ullamco exercitation do quis irure aliquip reprehenderit ea. Deserunt aliquip nostrud ea exercitation ex deserunt nulla esse consectetur irure mollit occaecat sunt. Voluptate nulla officia non est sit do pariatur eiusmod aliqua voluptate deserunt magna proident occaecat. Magna deserunt ullamco cupidatat anim enim amet velit laborum consectetur dolore. Nulla magna velit ullamco labore.Et eu ullamco ex ullamco. Irure est mollit Lorem ipsum nisi cupidatat qui in aute labore. Tempor adipisicing et dolore exercitation est ipsum ullamco exercitation do quis irure aliquip reprehenderit ea. Deserunt aliquip nostrud ea exercitation ex deserunt nulla esse consectetur irure mollit occaecat sunt. Voluptate nulla officia non est sit do pariatur eiusmod aliqua voluptate deserunt magna proident occaecat. Magna deserunt ullamco cupidatat anim enim amet velit laborum consectetur dolore. Nulla magna velit ullamco labore.",
    tags: ['tags', 'tags', 'tags'],
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
    authorId: "65b9cc7cfdc6e93339efa1b1",
    comments: ['In sint occaecat non sunt nulla reprehenderit culpa consequat voluptate ad.', 'Labore qui fugiat eiusmod fugiat.'],
    likes: [{
      username: 'Yoda'
    }]
  },
  {
    _id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    content: "Et eu ullamco ex ullamco. Irure est mollit Lorem ipsum nisi cupidatat qui in aute labore. Tempor adipisicing et dolore exercitation est ipsum ullamco exercitation do quis irure aliquip reprehenderit ea. Deserunt aliquip nostrud ea exercitation ex deserunt nulla esse consectetur irure mollit occaecat sunt. Voluptate nulla officia non est sit do pariatur eiusmod aliqua voluptate deserunt magna proident occaecat. Magna deserunt ullamco cupidatat anim enim amet velit laborum consectetur dolore. Nulla magna velit ullamco labore.",
    tags: ['tags', 'tags', 'tags'],
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
    authorId: "65b9cc7cfdc6e93339efa1b1",
    comments: ['In sint occaecat non sunt nulla reprehenderit culpa consequat voluptate ad.', 'Labore qui fugiat eiusmod fugiat.'],
    likes: [{
      username: 'Yoda'
    }]
  },
  {
    _id: '58694a0f-3da1-471f-bd96-145571e29d72',
    content: "Et eu ullamco ex ullamco. Irure est mollit Lorem ipsum nisi cupidatat qui in aute labore. Tempor adipisicing et dolore exercitation est ipsum ullamco exercitation do quis irure aliquip reprehenderit ea. Deserunt aliquip nostrud ea exercitation ex deserunt nulla esse consectetur irure mollit occaecat sunt. Voluptate nulla officia non est sit do pariatur eiusmod aliqua voluptate deserunt magna proident occaecat. Magna deserunt ullamco cupidatat anim enim amet velit laborum consectetur dolore. Nulla magna velit ullamco labore.",
    tags: ['tags', 'tags', 'tags'],
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
    authorId: "65b9cc7cfdc6e93339efa1b1",
    comments: ['In sint occaecat non sunt nulla reprehenderit culpa consequat voluptate ad.', 'Labore qui fugiat eiusmod fugiat.'],
    likes: [{
      username: 'Yoda'
    }]
  },
];

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
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
          <View style={styles.boxTwoChildSix}>
            <Ionic name="person-outline" style={styles.icon}></Ionic>
          </View>
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
            <FlatList data={DATA} keyExtractor={(item) => { item._id }} renderItem={({ item }) => (
              <View style={{
                width: windowWidth,
              }}>
                <View style={styles.boxFiveGrandChildOne}>
                  <View style={styles.boxFiveGreatGrandsonOne}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
                      }}
                    />
                  </View>
                  <View style={styles.boxFiveGreatGrandsonTwo}>
                    <Text style={styles.textThree}>
                      Yoda GreenBoy
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
                  <View style={styles.boxFiveGreatGrandsonFive}>
                    <Ionic name="heart-outline" style={styles.icon}></Ionic>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonSix}>
                    <Text>10</Text>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonSeven}>
                    <Text>4 comments</Text>
                  </View>
                  <View style={styles.boxFiveGreatGrandsonEight}>
                    <Text>3 shares</Text>
                  </View>
                </View>
              </View>
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
    width: windowWidth/ 7,
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