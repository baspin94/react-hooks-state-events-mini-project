import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
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
  };

  function handleClick(event){
    const newCategory = event.target.name;
    setSelectedCategory(newCategory);
  };

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTaskItems = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onFilterClick={handleClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={filteredTaskItems} onTaskDelete={handleDelete} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
