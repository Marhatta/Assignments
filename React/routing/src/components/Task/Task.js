import React from 'react';
import './task.css'; 

const Task = (props) => {
    return(
        <div className='task'>
            <span>{props.title}</span>
            <span className='status'>{props.completed}</span>
        </div>
    );
}

export default Task;