import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page2 from "./components/Page2";
import WishlistForm from "./components/forms/WishlistForm";

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:'200'}}>
      <Text>To Do List</Text>
      <TouchableOpacity>
      <Button
        title="Page2"
        color="#DB9B8F"
        onPress={() => {navigation.navigate("Page2")}}
      />
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="WishlistForm" component={WishlistForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
