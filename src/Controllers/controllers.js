const taskService = require('../Services/services');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }

  try {
    const newTask = await taskService.createTask(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await taskService.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const updatedTask = await taskService.updateTask(id, title, description, status);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await taskService.deleteTask(id);
    if (deleted) {
      res.status(204).send(); // No content on successful deletion
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
