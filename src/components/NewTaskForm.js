import React, {useState} from "react";

function NewTaskForm({categories}) {
  const [newTask, setNewTask] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  const categoryOptions = categories
    .filter(category => category !== "All")
    .map(category => {
      return <option key={category}>{category}</option>
    });

  function handleChange(event) {
    setNewTaskCategory(event.target.value);

  }

  function handleInput(event) {
    setNewTask(event.target.value);
  }
    
  return (
    <form className="new-task-form">
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
