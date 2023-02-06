import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const taskArray = TASKS.map(task => {
    const taskWithId = {
      id: uuid(),
      text: task.text,
      category: task.category,
    };
    return taskWithId
  })
  
  const [tasks, setTasks] = useState(taskArray);

  function handleDelete(event){
    const id = event.target.id;
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm />
      <TaskList tasks={tasks} onTaskDelete={handleDelete}/>
    </div>
  );
}

export default App;
