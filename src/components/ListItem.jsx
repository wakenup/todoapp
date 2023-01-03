import React from 'react'
import { forwardRef } from 'react';
import './ListItem.css'
import Task from './Task';


const ListItem = forwardRef(({ tasks, type, changeType, removeTask, editTask},ref) => {

  return (
    <div className='item' ref={ref}>
      <span>{type}</span>
      <ul className='tasks'>
        {tasks.map((task) => {
          if (task.type === type.toLowerCase()) {
            return <Task task={task} changeType={changeType} key={task.id} removeTask={removeTask} editTask={editTask}/>
          }
        })}
      </ul>
    </div>
  )
});


export default ListItem;
