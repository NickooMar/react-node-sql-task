import React from "react";

import { useTasks } from "../context/TaskProvider";

import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();

  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-600 rounded-md p-4 text-white">
      <header className="flex justify-between ">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done === 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createdAt}</span>

      <div className="flex gap-x-2 flex-end">
      <button onClick={() => deleteTask(task.id)} className="bg-slate-300 px-2 py-1 text-black">Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)} className="bg-slate-300 px-2 py-1 text-black">Edit</button>
      <button onClick={() => handleDone(task.done)} className="bg-slate-300 px-2 py-1 text-black" >Toogle Task</button>
      </div>
    </div>
  );
}

export default TaskCard;
