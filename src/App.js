import './App.css';
import InputField from './components/InputField';
import List from './components/List';
import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'to-do',
      text: 'Chores',
    },
    {
      id: 2,
      type: 'to-do',
      text: 'Learn english',
    },
  ]);

  // useEffect(() => {
  //   console.log(tasks);
  // });

  const changeType = (task) => {
    // console.log(task);
    if (task.type === 'to-do') {
      setTasks(
        tasks.map(item =>
          item.id === task.id ? { ...item, type: 'inprocess' } : item
        )
      )
    }
    if (task.type === 'inprocess') {
      setTasks(
        tasks.map(item =>
          item.id === task.id ? { ...item, type: 'completed' } : item
        )
      )
    }
    console.log(task);
  };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };


  const removeTask = (task) => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  const editTask = (inputValue,task) => {
    console.log(inputValue);
    setTasks(
      tasks.map(item =>
        item.id === task.id ? { ...item, text: inputValue } : item
      )
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <InputField addNewTask={addNewTask} />
        <List tasks={tasks} changeType={changeType} removeTask={removeTask} editTask={editTask} />
      </div>
    </DndProvider>
  );
}

export default App;
