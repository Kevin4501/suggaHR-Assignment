const mongoose = require('mongoose');
const  Task  = require('../Models/Models'); // Import the Task model

const getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (title, description) => {
  const newTask = new Task({ title, description });
  await newTask.save();
  return newTask;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id);
  return task;
};

const updateTask = async (id, title, description, status) => {
  const updatedTask = await Task.findByIdAndUpdate(id, { title, description, status }, { new: true }); // Return updated document
  return updatedTask;
};

const deleteTask = async (id) => {
  await Task.findByIdAndDelete(id);
  return true; // Indicate successful deletion (optional)
};

module.exports = { getAllTasks, createTask, getTaskById, updateTask, deleteTask };
