import React, { createContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => { //Creamos un hook
    const context = useContext(TaskContext)

    if(!context) {
        throw new Error('useTasks must be used within a TaskContextProvider')
    }
    return context
}

const TaskContextProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{ text: "Hello World" }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
