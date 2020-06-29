import React from 'react';
import LocationCard from './LocationCard'
import {View, StyleSheet} from 'react-native'
import toDoList from '../assets/toDoList'

const TaskList = ({toDoList}) => {
  return(

    <View >
      {toDoList.map((u) =>
          <LocationCard goal = {u}/>
        )
      }
    </View>
  );
}

export default TaskList;
