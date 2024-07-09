import React from "react";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskList() {
  let [tasks] = useContext(TaskContext);

  return (
    <div>
      <p className="lead fs-1 text-center bg-light text-muted border shadow-lg">TASKS</p>
      {tasks.map((task, index) => (
        <p className="lead" key={index}>
          {task.newTask}
        </p>
      ))}
    </div>
  );
}

export default TaskList;