import React from "react";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskContext } from "../contexts/TaskContext";
import { useForm } from "react-hook-form";

function AddTasks() {
  //eslint-disable-next-line no-unused-vars
  let [tasks, setTasks] = useContext(TaskContext);
  let { register, handleSubmit } = useForm();

  function handleFormSubmit(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <p className="lead fs-1 text-center bg-light text-muted border shadow-lg">NEW TASK</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          id="t"
          className="form-control mb-3"
          placeholder="Enter a new task"
          {...register("newTask")}
        />
        <button
          type="submit"
          className="btn btn-success p-2 d-block mx-auto text-light"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTasks;
