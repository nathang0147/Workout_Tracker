const workoutRouter = require('./workouts');
const userRouter = require('./user');
function routes(app){
    app.use('/user', userRouter);
    app.use('/workouts', workoutRouter);
    app.use('/', (req, res) => res.json({mssg: 'Home'}))

}

module.exports = routes;