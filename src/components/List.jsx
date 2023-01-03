import React from 'react'
import ListItem from './ListItem'
import './List.css';
import { useDrop } from 'react-dnd'

const List = ({ tasks, changeType, removeTask, editTask }) => {


  const handleDropProcess = (task) => {
    // console.log(task);
    if(task.type==='to-do') {
      changeType(task);
    }
  };

  const handleDropComplete = (task) => {
    // console.log(task);
    if(task.type==='inprocess') {
      changeType(task);
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => handleDropProcess(item.task),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [tasks]);

  const [{ isOverC }, dropComplete] = useDrop(() => ({
    accept: 'task',
    drop: (item) => handleDropComplete(item.task),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [tasks]);


  return (

    <div className='listcontainer' >
      <ListItem tasks={tasks} type={'TO-DO'} changeType={changeType} removeTask={removeTask} editTask={editTask} />
      <ListItem tasks={tasks} type={'INPROCESS'} changeType={changeType} removeTask={removeTask} editTask={editTask} ref={drop} />
      <ListItem tasks={tasks} type={'COMPLETED'} changeType={changeType} removeTask={removeTask} editTask={editTask} ref={dropComplete} />
    </div>

  )
};


export default List;
