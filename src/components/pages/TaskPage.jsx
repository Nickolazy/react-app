import React from 'react'
import BalancePage from './BalancePage'
import ToDoListPage from './ToDoListPage'

import { useTheme } from '../ThemeContext'

const TaskPage = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <>
    <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
      className="text-black text-2xl p-2 border-2 border-black bg-gray-100 hover:bg-gray-200 
        active:scale-95 rounded-xl m-5">
      
      Change Theme
    </button>
    <div className={`min-h-screen p-4 
      ${theme === 'light' ? 'bg-light-bg text-light-text' 
      : theme === 'dark' ? 'bg-dark-bg text-dark-text' 
      : 'bg-green-bg text-green-text'} transition-colors`}>

      <BalancePage />
      <ToDoListPage />
    </div>
    </>
  )
}

export default TaskPage
