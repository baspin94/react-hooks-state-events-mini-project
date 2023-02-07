import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  const categoryOptions = categories
    .filter(category => category !== "All")
    .map(category => {
      return <option key={category}>{category}</option>
    });

  function handleChange(event) {
    setNewTaskCategory(event.target.value);
  };

  function handleInput(event) {
    setNewTask(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newTaskItem = {
      id: uuid(),
      text: newTask,
      category: newTaskCategory,
    };
    onTaskFormSubmit(newTaskItem);
  };
    
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onInput={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
