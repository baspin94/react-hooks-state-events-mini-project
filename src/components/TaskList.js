import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  
  const taskItems = tasks.map(task => {
    return <Task key={task.id} id={task.id} text={task.text} category={task.category} onTaskDelete={onTaskDelete}/>
  })
  
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
};

export default TaskList;
