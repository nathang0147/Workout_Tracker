const express = require('express');
const router = express.Router();

const workoutController = require('../app/controller/WorkoutController');


router.get('/:id',workoutController.getWorkout);
router.delete('/:id',workoutController.deleteWorkout);
router.patch('/:id',workoutController.updateWorkout);
router.get('/',workoutController.getWorkouts);
router.post('/',workoutController.createWorkout);


module.exports = router;
