"use client";

import { useState } from "react";
import { Task } from "./types/Task";

export default function Home() {
  function getUniqueID() {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }

  const [itemInput, setItemInput] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([
    { id: getUniqueID(), label: "Do homework", isDone: true },
    { id: getUniqueID(), label: "Do the dishes", isDone: false },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;
    setTaskList([
      ...taskList,
      { id: getUniqueID(), label: itemInput, isDone: false },
    ]);
    setItemInput("");
    console.log(taskList);
  };

  const handleRemoveButton = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const handleCheckButton = (taskId: number) => {
    const updatedList = [...taskList];
    for (let i in updatedList) {
      if (updatedList[i].id === taskId) {
        updatedList[i].isDone = !updatedList[i].isDone;
      }
    }
    setTaskList(updatedList);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Task List</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="What's your task?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Add</button>
      </div>

      <p className="my-4">{taskList.length} items on the list</p>

      <ul className="w-full max-w-lg pl-5">
        {taskList.map((task) => (
          <li key={task.id}>
            <input
              onClick={() => handleCheckButton(task.id)}
              type="checkbox"
              checked={task.isDone}
              className="mr-3 w-6 h-6"
            />
            {task.label + " "}
            <button
              className="hover:underline"
              onClick={() => handleRemoveButton(task.id)}
            >
              {" "}
              [ delete ]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
