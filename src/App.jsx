import React, { useState } from 'react';
import HelloPage from "./components/pages/HelloPage";
import DestinationsPage from "./components/pages/DestinationsPage";
import ExperiensesPage from "./components/pages/ExperiensesPage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/Footer";
import TaskPage from "./components/pages/TaskPage";
import UserList from "./components/UserList"; 
import UserProfile from "./components/UserProfile"; 
import Notification from "./components/Notification"; 
import { ThemeProvider } from './components/ThemeContext';
import { createPortal } from 'react-dom';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const createUser = (name) => {
    const newUser = { id: Date.now(), name, isActive: true };
    setUsers([...users, newUser]);
    setNotifications([...notifications, `User ${name} created!`]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setNotifications([...notifications, `User deleted!`]);
  };

  const editUser = (id, name) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, name } : user
    );
    setUsers(updatedUsers);
    setNotifications([...notifications, `User ${name} edited!`]);
  };

  return (
    <>
      <ThemeProvider>
        <HelloPage />
        <DestinationsPage />
        <ExperiensesPage />
        <AboutPage />
        <TaskPage />
        
        <UserList users={users} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
        
        {selectedUser && (
          <UserProfile 
            user={selectedUser} 
            editUser={editUser} 
            setSelectedUser={setSelectedUser} 
          />
        )}
        
        <Footer />
        
        {createPortal(
          <Notification notifications={notifications} />,
          document.getElementById('notifications-root')
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
