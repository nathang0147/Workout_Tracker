require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');


// Create an express app
const app = express();

// Use the express-static middleware
app.use(express.json()); // for parsing application/json for post/patch request to access to body(data) of request
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


//route
routes(app);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

