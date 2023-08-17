const express = require('express');
const app = express();
const port = 3000; // Porta na qual o servidor irá ouvir

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

app.post('/tasks', (req, res) => {
  const newTask = { title: 'New Task' };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

