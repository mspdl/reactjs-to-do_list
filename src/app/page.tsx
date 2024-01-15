"use client";

import { useState } from "react";
import { Task } from "./types/Task";

export default function Home() {
  const [itemInput, setItemInput] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([
    { label: "Do homework", isDone: true },
    { label: "Do the dishes", isDone: false },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;
    setTaskList([...taskList, { label: itemInput, isDone: false }]);
    setItemInput("");
  };

  const handleRemoveButton = (taskId: number) => {
    setTaskList(taskList.filter((task, index) => index !== taskId));
  };

  const handleCheckButton = (taskId: number) => {
    const updatedList = [...taskList];
    updatedList[taskId].isDone = !updatedList[taskId].isDone;
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
        {taskList.map((task, index) => (
          <li key={index}>
            <input
              onClick={() => handleCheckButton(index)}
              type="checkbox"
              checked={task.isDone}
              className="mr-3 w-6 h-6"
            />
            {task.label + " "}
            <button
              className="hover:underline"
              onClick={() => handleRemoveButton(index)}
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
