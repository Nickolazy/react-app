import React from 'react'
import { useState } from 'react'

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(taskName.trim === "") {
      setError("The task name cannot be empty!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="taskName" className="block font-medium mb-2">
            Name of Task:
          </label>
          <input 
            type="text"
            id='taskName' 
            value={taskName}
            onChange={handleChange}
            placeholder='Enter a task'
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />

          {error && <p className='text-red-500'>{error}</p>}
          <button 
            type='submit'
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
