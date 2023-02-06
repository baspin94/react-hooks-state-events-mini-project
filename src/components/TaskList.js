import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks }) {

  const taskItems = tasks.map(task => {
    const taskKey = uuid()
    return <Task key={taskKey} text={task.text} category={task.category}/>
  })
  
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
