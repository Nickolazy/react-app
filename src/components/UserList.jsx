import React from 'react';

const UserList = ({ users, deleteUser, setSelectedUser }) => {
  return (
    <div >
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.isActive ? 'Active' : 'Inactive'})
            <button onClick={() => setSelectedUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
