import React, { useState, useContext } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  //Creamos un hook
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();

    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);

      setTasks(tasks.filter((task) => task.id != id)); //Elimina la tarea en tiempo real sin tener que refrescar la página

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task); //Importante pasarle los valores que requiere la funcion para pasarselos al backend
      // setTasks([...task, response.data])
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      tasks.map((task) =>
        task.id === id ? (task.done = task.done === 0 ? 1 : 0) : task.done
      );
      setTasks([...tasks]);
      //Por cada tarea del arreglo voy a buscar el id que quiero actualizar, si lo encuentra entonces si es 0 le coloca 1, y viceversa
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
