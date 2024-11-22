import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === '') {
      setError('The task name cannot be empty!');
      return;
    }

    onAddTask(taskName);
    setTaskName('');
    setError('');
  };

  return (
    <div className="w-1/2 bg-white p-5 border-2 border-black rounded-2xl shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label htmlFor="taskName" className="font-semibold text-lg">
            Name of Task:
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleChange}
            placeholder="Enter a task"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          {error && <p className="text-red-500 text-lg">{error}</p>}
          <button
            type="submit"
            className="inline-flex w-fit bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:scale-95 mt-4"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
