import React from 'react'
import TaskForm from '../TaskForm'

const ToDoListPage = () => {
  return (
    <section>
      <div className='w-full h-3 bg-blue-900'></div>
        <div id='tasks' className="w-full h-[700px] bg-[url('../src/assets/img/gallery_page/gallery_page_backgr.png')] 
          bg-cover bg-center text-black">
          <div className='p-10'>
            <h1 className='font-bold text-6xl'> Task Form </h1>
          </div>

          <TaskForm />
        </div>
    </section>
  )
}

export default ToDoListPage
