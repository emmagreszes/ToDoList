import React from 'react';
import LocationCard from './LocationCard'
import {View, StyleSheet} from 'react-native'
import wishlist from '../assets/wishlist'

const Wishes = () => {
  return(

    <View style = {styles.map}>
      {wishlist.map((u) =>
          <LocationCard location = {u}/>
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
