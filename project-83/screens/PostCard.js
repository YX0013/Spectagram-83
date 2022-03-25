import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class PostCard extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <View style={styles.container}>
          <View style = {styles.cardContainer}>
            <View style = {styles.authorContainer}>
              <View style = {styles.authorImageContainer}>
                <Image style = {styles.profileImage} source = {require('../assets/profile_img.png')}/>
              </View>
              <View style = {styles.authorNameContainer}>
                <Text style = {styles.postAuthorText}>{this.props.post.author}</Text>
              </View>
            </View>
            <Image style = {styles.postImage} source = {require('../assets/post.jpeg')}/>
            <View style = {styles.captionContainer}>
              <Text style = {styles.postTitleText}>{this.props.post.title}</Text>
              <Text style = {styles.captionText}>{this.props.post.caption}</Text>
            </View>
            <View style = {styles.actionContainer}> 
              <View style = {styles.likeButton}>
                <Ionicons name = {'heart'} size = {RFValue(30)} color = {"white"}/>
                <Text style = {styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#222222",
    borderRadius: RFValue(20)
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    flexDirection: "row",
    padding: RFValue(10)
  },
  authorImageContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
    width: "20%"
  },
  profileImage: {
    height: RFValue(20),
    justifyContent: "center",
    width: RFValue(20)
  }, 
  postTitleText: {
    fontSize: RFValue(25),
    color: "white",
    paddingLeft: RFValue(10),
    paddingTop: RFValue(10),
  },
  postAuthorText: {
    fontSize: RFValue(18),
    color: "white",
  },
  captionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10),
    paddingLeft: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});