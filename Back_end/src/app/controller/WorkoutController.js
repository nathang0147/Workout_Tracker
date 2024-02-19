class WorkoutController{
    getWorkouts(req,res){
        res.send('getWorkouts');
    }
    createWorkout(req,res){
        res.send('createWorkout');
    }
    getWorkout(req,res){
        res.send('getWorkout');
    }
    updateWorkout(req,res){
        res.send('updateWorkout');
    }
}

module.exports = new WorkoutController;