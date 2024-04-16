const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    videoID: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
}, {timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);