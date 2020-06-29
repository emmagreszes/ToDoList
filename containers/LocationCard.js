import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FlipCard from 'react-native-flip-card'

const LocationCard = ({ goal }) => {
  return (

      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View  style = {styles.card} key = {goal.id}>
          <Icon style = {styles.pin} name = "pinboard" type = "fontisto" color = "red"/>
          <Text style = {styles.text}>{goal.Task}</Text>
        </View>
        {/* Back Side */}
        <View style = {styles.back}>
          <Text>Things to Do: </Text>
          <Text> -Go swimming </Text>
          <Text> -Drink! </Text>
          <Text> -See Rome </Text>
          <Text> -Get married! </Text>
          <Icon style = {styles.icon} name = "trash" type = "fontisto" color = "#517fa4" onPress = "DELETE" />

        </View>

      </FlipCard>

  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 12,
    padding: 12

  },
  card: {
    justifyContent: 'center',
    width: 150,
    height: 160,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  image: {
    width: 128,
    height: 100 ,
    justify: "center"
  },
  back:{
    justifyContent: 'center',
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
        height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  icon:{
    justifyContent: "right",
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
  pin: {
    justifyContent: "left",
    marginTop: 5,
    color: "red",
  }
})

export default LocationCard;
