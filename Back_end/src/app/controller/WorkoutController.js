const Workout = require('../models/WorkoutsModel');
const mongoose = require('mongoose');

class WorkoutController{
    //[GET] /workouts
    async getWorkouts(req,res){
        const user_id = req.user._id;

        const workout = await Workout.find({user_id }).sort({createdAt: -1});

        res.status(200).json(workout);
    }

    //[POST] /workouts
    async createWorkout(req,res){
        const { title, reps, sets, weight, videoID, image } = req.body;

        let emptyFields = [];

        if(!title) emptyFields.push('title');
        if(!reps) emptyFields.push('reps');
        if(!sets) emptyFields.push('sets');
        if(!weight) emptyFields.push('weight');
        if(!videoID) emptyFields.push('videoID');

        if(emptyFields.length > 0) return res.status(400).json({error: `Please fill in the following fields: ${emptyFields.join(', ')}`});

        try{
            const user_id = req.user._id;
            const workout = await Workout.create({title, reps, sets, user_id, weight, videoID, image});
            res.status(200).json(workout);
        }catch(err){
            res.status(400).json({error: err.message});
        }
    }

    //[GET] /workouts/:id
    async getWorkout(req,res){
        const { id } = req.params; // id must be 12 bytes or a string of 24 hex characters

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Workout not found'});//check if id is valid

        const workout = await Workout.findById(id);

        if(!workout) return res.status(404).json({error: 'Workout not found'});

        res.status(200).json(workout);
    }

    //[PATCH] /workouts/:id
    async updateWorkout(req,res){
        const { id } = req.params; // id must be 12 bytes or a string of 24 hex characters

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Workout not found'});//check if id is valid

        const workout = await Workout.findByIdAndUpdate({_id: id}, {
            ...req.body //spread out the request body
        })

        if(!workout) return res.status(400).json({error: 'Workout not found'});

        res.status(200).json(workout);
    }


    //[DELETE] /workouts/:id
    async deleteWorkout(req,res){
        const { id } = req.params; // id must be 12 bytes or a string of 24 hex characters

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Workout not found'});//check if id is valid

        const workout = await Workout.findByIdAndDelete({_id: id});

        if(!workout) return res.status(400).json({error: 'Workout not found'});

        res.status(200).json(workout);
    }
}

module.exports = new WorkoutController;