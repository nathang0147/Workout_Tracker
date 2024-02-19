require('dotenv').config();

const express = require('express');

const routes = require('./src/routes');


// Create an express app
const app = express();

// Use the express-static middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//route
routes(app);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})

