const workoutRouter = require('./workouts');

function routes(app){
    app.use('/WorkoutPlan', workoutRouter);
    app.use('/', (req, res) => res.json({mssg: 'Home'}))

}

module.exports = routes;