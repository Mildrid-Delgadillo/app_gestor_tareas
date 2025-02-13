import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </ul>
  );
}

export default TaskList;

