const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample array to store tasks
const tasks = [];

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint to create a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Endpoint to update a task by ID
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  if (!taskToUpdate) {
    return res.status(404).json({ error: 'Task not found' });
  }
  taskToUpdate.title = title;
  taskToUpdate.description = description;
  res.json(taskToUpdate);
});

// Endpoint to delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
