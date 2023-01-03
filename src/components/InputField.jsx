import React from 'react'
import './InputField.css'
import {useState} from 'react'

export default function InputField({addNewTask}) {

  const [task, setTask] = useState({
    id: Date.now(),
    type: 'to-do',
    text: ''
  })

  const handleClick = () => {
    const newTask = task;
    setTask({
      id: Date.now(),
      type: 'to-do',
      text: ''
    })
    addNewTask(newTask)
  }

  return (
    <div className='container'>
        <input type="text" placeholder='Enter a new TO-DO' onChange={e => setTask({...task,text : e.target.value})} value={task.text} />
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}
