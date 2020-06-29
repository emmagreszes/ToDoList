import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import useStickyState from '../../useStickyState';
import FormField from '../FormField';
import { Card, ListItem, Icon } from 'react-native-elements'
import { formData } from '../formData';

export default function WishlistForm({ route, navigation }) {
  const [text, setText] = useState('');
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const toDoList = route.params.toDoList;
  const writeItemToStorage = route.params.writeItemToStorage;

  const handleFormValueChange = (key, value) => {
    if (key == 'task') {
      setTask(value)
    } else if (key == 'dueDate') {
      setDueDate(value)
    } else if (key == 'time') {
      setTime(value)
    }
  }

  const handleSubmit = () => {
    const obj = {Task:task, DueDate:dueDate, Time:time}
    writeItemToStorage(toDoList.concat(obj))
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <FormField
      label='Task'
      formKey='task'
      placeholder='Task'
      handleFormValueChange={handleFormValueChange}
    />
    <FormField
      label='DueDate'
      formKey='dueDate'
      placeholder='Due Date/ Target Goal'
      handleFormValueChange={handleFormValueChange}
    />
    <FormField
      label='Time'
      formKey='time'
      placeholder='Desired Time to Complete Task'
      handleFormValueChange={handleFormValueChange}
    />
    <Button title = "Submit" onPress={handleSubmit}/>



      <Card containerStyle= {{padding:8}}>
        {
            <View>
              <Text style = {styles.text}>{task}</Text>
            </View>
        }
      </Card>
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
