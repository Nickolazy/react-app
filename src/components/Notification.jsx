import React from 'react';

const Notification = ({ notifications }) => {
  return (
    <div className="fixed top-4 right-4 z-50 w-80 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notif, index) => (
            <li key={index} className="mb-2">
              {notif}
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default Notification;
