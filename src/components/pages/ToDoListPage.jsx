import React from 'react'
import { useState } from 'react'
import TaskForm from '../TaskForm'

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: taskName }]);
  };

  return (
    <section>
      <div className='w-full h-3 bg-blue-900'></div>
        <div id='tasks' className="w-full h-[700px] bg-[url('../src/assets/img/gallery_page/gallery_page_backgr.png')] 
          bg-cover bg-center text-black">
          <div className='p-10'>
            <h1 className='font-bold text-6xl'> Task Form </h1>
            <div className='flex flex-col items-center mt-10'>
              <TaskForm onAddTask={addTask} />
              <ul className="w-full mt-4 flex gap-4 justify-start">
                {tasks.map((task) => (
                  <li key={task.id} className="border border-gray-500 rounded-md px-4 py-2 mb-2">
                    {task.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ToDoListPage
