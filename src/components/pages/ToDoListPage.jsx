import React from 'react'
import { useState, useEffect } from 'react'
import TaskForm from '../TaskForm'

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: taskName, editing: false },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName, editing: false } : task
      )
    );
  };

  const toggleEdit = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, editing: !task.editing } : task
      )
    );
  };

  return (
    <section>
      <div className="w-full h-3 bg-blue-900"></div>
      <div
        id="tasks"
        className="w-full h-[700px] bg-[url('../src/assets/img/gallery_page/gallery_page_backgr.png')] bg-cover bg-center text-black"
      >
        <div className="p-10">
          <h1 className="font-bold text-6xl">Task Form</h1>
          <div className="flex flex-col items-center mt-10">
            <TaskForm onAddTask={addTask} />
            <ul className="w-full mt-4 flex flex-col gap-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="border border-gray-500 rounded-md px-4 py-2 mb-2 flex justify-between items-center"
                >
                  {task.editing ? (
                    <input
                      type="text"
                      defaultValue={task.name}
                      onBlur={(e) => editTask(task.id, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <span>{task.name}</span>
                  )}
                  <div>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                      onClick={() => toggleEdit(task.id)}
                    >
                      {task.editing ? 'Save' : 'Edit'}
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoListPage;
