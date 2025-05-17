import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    api.get('/secure/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage('Unauthorized'));
  }, []);

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => navigate('/tasks')}>Manage Tasks</button>
      <button onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>Logout</button>
    </div>
  );
}

export default Dashboard;
