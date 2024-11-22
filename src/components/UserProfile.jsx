import React, { useState, useEffect } from 'react';

const UserProfile = ({ user, editUser, setSelectedUser }) => {
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    editUser(user.id, name);
    setSelectedUser(null);
  };

  useEffect(() => {
    setName(user.name); 
  }, [user]);

  return (
    <div>
      <h2>Edit Profile: {user.name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setSelectedUser(null)}>Cancel</button>
    </div>
  );
};

export default UserProfile;
