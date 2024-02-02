import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
            <Ionic name="reorder-three-outline" style={styles.icon}></Ionic>
          </View>
        </View>
        {/* navigation */}



        {/* add-post */}
        <View style={styles.boxThree}>
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
        </View>
        {/* add-post */}


        {/* post */}
        <View style={styles.boxFive}>
          <View style={[styles.boxFiveChildOne, { width: windowWidth, height: "100%" }]}>
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
                Aliquip incididunt culpa proident nisi eiusmod. Cillum aute officia mollit elit enim tempor occaecat sit reprehenderit. Aute nostrud nostrud sit id pariatur mollit nulla ad et et magna et esse et. Ipsum sint nisi ea labore voluptate laborum consectetur commodo ipsum. Eiusmod id minim aute ut. Officia ullamco amet exercitation ullamco.
              </Text>
            </View>
            <View style={styles.boxFiveGrandChildThree}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753',
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
    backgroundColor: '#d5d5d5'
  },
  boxFiveChildOne: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },


  //postheader
  boxFiveGrandChildOne: {
    flex: 4,
    backgroundColor: '#637A9F',
    flexDirection: 'row'
  },
  boxFiveGreatGrandsonOne: {
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
    flex: 5,
    backgroundColor: '#ffffff',
    padding: 8
  },
  textContent: {
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  boxFiveGrandChildThree: {
    flex: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: '#ececec',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  boxFiveGrandChildFour: {
    flex: 3,
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