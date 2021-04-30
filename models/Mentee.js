const mongoose = require('mongoose')

const MenteeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Mentee', MenteeSchema)