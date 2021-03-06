const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    subject: { type: String, required: [true, 'please provide a subject to the exercise'] },
    content: {type: String, required: [true, 'The provide an exercise']},
    topic: { type: String, required: [true, 'A topic is required for easier search']},
    answer: { type: String, required: [true, 'An answer is required so we could help our students to check themselves']},
    sketch: String,
    level: {type: Number, required: [true, 'Please provide a level on GCSE scale from 1 to 9']}
})

module.exports = mongoose.model('Exercise', exerciseSchema)