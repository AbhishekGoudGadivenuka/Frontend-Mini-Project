import React from "react";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskCount() {
  const [tasks] = useContext(TaskContext);

  return (
    <div>
      <p className="lead fs-1 text-center bg-light text-muted bg-light text-muted border shadow-lg">TASK COUNT</p>
      <p className="lead">{tasks.length}</p>
    </div>
  );
}

export default TaskCount;