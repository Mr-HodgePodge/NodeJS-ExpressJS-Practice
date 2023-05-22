const mongoose = require('mongoose')
const {stringify} = require("nodemon/lib/utils")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field'],
    trim: true,
    maxlength: [255, 'The maximum length of the name field cannot exceed 255 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('Task', TaskSchema)