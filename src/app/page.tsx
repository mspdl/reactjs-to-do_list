"use client";

import { useState } from "react";
import { Task } from "./types/Task";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([
    { label: "Do homework", isDone: false },
    { label: "Do the dishes", isDone: false },
  ]);

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Task List</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="What's your task?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        />
        <button>Add</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {taskList.map((task) => (
          <li key={task.label}>
            {task.label + " "}
            <button className="hover:underline"> [ delete ]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
