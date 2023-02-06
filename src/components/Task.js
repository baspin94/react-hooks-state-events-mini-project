import React from "react";

function Task({id, text, category, onTaskDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={id} onClick={onTaskDelete}>X</button>
    </div>
  );
}

export default Task;
