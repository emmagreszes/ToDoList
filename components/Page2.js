import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import Wishes from '../containers/Wishes'
import WishlistForm from './forms/WishlistForm'
import { useAsyncStorage } from '@react-native-community/async-storage';
import initialWishlist from '../assets/wishlist';

export default function Page2({ route, navigation }) {
  const [text, setText] = useState('');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setWishlist(JSON.parse(item)||wishlist);
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setWishlist(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const [wishlist,setWishlist] = useState(initialWishlist);
  const {getItem, setItem} = useAsyncStorage('@wishlist');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon raised name = "arrow-return-left" type = "fontisto" color = "#DB9B8F"
          onPress={() => navigation.goBack()} />

          <Icon raised name = "plus-a" type = "fontisto" color = "#DB9B8F"
            onPress = {() => navigation.navigate('WishlistForm', {writeItemToStorage: writeItemToStorage, wishlist: wishlist})} />
      </View>
      
      <Wishes/>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
