const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks: tasks })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    if (task === null)
      return res.status(404).json({ msg: `Cannot find task with id: ${req.params.id}`})
    return res.status(200).json({ task: task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate( {_id: req.params.id}, req.body, {
      new: true,
      runValidators: true,
    })
    if (task === null)
      res.status(404).json({ msg: `Cannot find and update task with id: ${req.params.id}`})
    res.status(200).json({task})
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id: req.params.id})
    if (task === null)
      return res.status(404).json({ msg: `Cannot find and delete task with id: ${req.params.id}`})
    return res.status(200).json({ task: task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}