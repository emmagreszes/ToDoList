import React from 'react';
import LocationCard from './LocationCard'
import {View, StyleSheet} from 'react-native'
import toDoList from '../assets/toDoList'

const Wishes = () => {
  return(

    <View style = {styles.map}>
      {toDoList.map((u) =>
          <LocationCard goal = {u}/>
        )
      }
    </View>
  );
}

export default Wishes;

const styles = StyleSheet.create({
  map: {
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
});
