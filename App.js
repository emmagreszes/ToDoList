import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page2 from "./components/Page2";
import Form from "./components/forms/Form";

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:'200'}}>
      <TouchableOpacity>
      <Button
        title="To Do List"
        color="#DB9B8F"
        onPress={() => {navigation.navigate("ToDo")}}
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
        <Stack.Screen name="Home Screen" component={Page1} />
        <Stack.Screen name="ToDo" component={Page2} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
