import React from 'react';
import TaskCard from './TaskCard'
import {View, StyleSheet} from 'react-native'
import toDoList from '../assets/toDoList'

const TaskList = ({toDoList}) => {
  return(

    <View >
      {toDoList.map((u) =>
          <TaskCard goal = {u}/>
        )
      }
    </View>
  );
}

export default TaskList;
