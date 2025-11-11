import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [analytics, setAnalytics] = useState({});

  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get('/api/analytics/summary', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => setAnalytics(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard Analytics</h2>
      <div>
        <span>Active Issues: {analytics.activeIssues}</span>
        <span>Closed Issues: {analytics.closedIssues}</span>
      </div>
    </div>
  );
}

export default Dashboard;
