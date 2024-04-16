const express = require('express');


const workoutController = require('../app/controller/WorkoutController');

const authenRequire = require('../app/authMiddleware/authenRequire');

const router = express.Router();

router.use(authenRequire);


router.get('/:id',workoutController.getWorkout);
router.delete('/:id',workoutController.deleteWorkout);
router.patch('/:id',workoutController.updateWorkout);
router.get('/',workoutController.getWorkouts);
router.post('/',workoutController.createWorkout);


module.exports = router;
