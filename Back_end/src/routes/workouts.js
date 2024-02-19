const express = require('express');
const router = express.Router();

const workoutController = require('../app/controller/WorkoutController');

router.get('/workouts',workoutController.getWorkouts);
router.post('/workouts',workoutController.createWorkout);
router.get('/workouts/:id',workoutController.getWorkout);
router.put('/workouts/:id',workoutController.updateWorkout);
router.patch('/workouts/:id',workoutController.updateWorkout);


module.exports = router;
