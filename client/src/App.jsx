import React from "react";
import "./App.css";

//Context
import TaskContextProvider from "./context/TaskContext";

//Pages
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";

//Components
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
