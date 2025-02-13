import React from "react";

function Task({ task, index, toggleTaskCompletion }) {
  return (
    <li
      className={task.completed ? "completed" : ""}
      onClick={() => toggleTaskCompletion(index)}
    >
      {task.text}
    </li>
  );
}

export default Task;
