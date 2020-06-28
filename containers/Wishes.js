import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'

const Wishes = ({wishlist}) => {
  return(
    <View>
      {wishlist.map((u) =>
          <LocationCard location = {u}/>
        )
      }
    </View>
  );
}

export default Wishes;
