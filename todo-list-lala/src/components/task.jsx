import React from "react";
import { Link } from "react-router-dom";

const Task = ({task,isRepeated,deleteTask,editTask}) => {


    return (
        <li className={`${task.priority} ${isRepeated ? 'repeated' : ''}` }>
            {task.description} 
            <Link to={`/task/${task.id}`}>Go to</Link>
            <span onClick={()=>{
                editTask(task)}}  className='feather'>I</span>
            <span onClick={()=>{
                deleteTask(task.id)}}  className='feather'>X</span>
        </li>
    )
}

export default Task;