import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/notifications', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => setNotifications(res.data));
  }, []);

  return (
    <ul>
      {notifications.map(n => (
        <li key={n._id}>{n.message} - {n.read ? "Read" : "Unread"}</li>
      ))}
    </ul>
  );
}

export default Notifications;
