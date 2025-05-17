import { useEffect, useState } from 'react';
import api from '../api/axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const token = localStorage.getItem('token');

  const fetchTasks = () => {
    api.get('/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setTasks(res.data));
  };

  const createTask = (e) => {
    e.preventDefault();
    api.post('/tasks', { title, description }, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      setTitle('');
      setDescription('');
      fetchTasks();
    });
  };

  const deleteTask = (id) => {
    api.delete(`/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(fetchTasks);
  };

  useEffect(() => {
    if (!token) return;
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Your Tasks</h2>
      <form onSubmit={createTask}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
