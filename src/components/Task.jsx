import React, { useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import { useDrag } from 'react-dnd'
import './Task.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task({ task, changeType, removeTask, editTask }) {

    const [isEditing, setIsEditing] = useState(false);

    const [inputValue, setInputValue] = useState(task.text);

    const handleClick = (task) => {
        changeType(task);
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));


    const handleEditClick = (task) => {
        setIsEditing(!isEditing);
        editTask(inputValue,task);
    };
    

return (
    <li ref={drag}>
        <div className='taskcontainer'>
            <div className='iconbutton'>
                {task.type === 'to-do' ?
                    <IconButton onClick={() => handleClick(task)} disableRipple={true} >
                        <RadioButtonUncheckedIcon />
                    </IconButton>
                    : task.type === 'inprocess' ?
                        <IconButton onClick={() => handleClick(task)} disableRipple={true}>
                            <PendingIcon />
                        </IconButton>
                        :
                        <IconButton onClick={() => handleClick(task)} disableRipple={true}>
                            <CheckCircleOutlineIcon />
                        </IconButton>}
            </div>
            <div className='tasktitle'>
                {isEditing ?
                    <div className='edit'>
                        <input className='inputchange' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                        <button onClick={() => handleEditClick(task)}>Save</button>
                    </div>
                    :
                    task.text

                }
            </div>
        </div>
        <div className='modifycontainer'>
            <IconButton disableRipple={true} style={{ marginRight: '20px' }} onClick={() => { setIsEditing(!isEditing) }}>
                <EditIcon />
            </IconButton>
            <IconButton disableRipple={true} onClick={() => removeTask(task)}>
                <DeleteIcon />
            </IconButton>
        </div>
    </li>
)
}

