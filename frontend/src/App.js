import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notifications';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const role = localStorage.getItem('role');

  if (!token) return <LoginPage setToken={setToken} />;

  return (
    <div>
      {role === 'admin' || role === 'operator' ? (
        <>
          <Dashboard />
          <Notifications />
        </>
      ) : (
        <p>Citizen Portal (submit issues here)</p>
      )}
    </div>
  );
}

export default App;
