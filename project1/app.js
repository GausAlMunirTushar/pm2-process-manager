const express = require('express');
const morgan = require('morgan');
const app = express();


// middlewares
app.use(morgan('dev'))
// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World"
    })
})

module.exports = app
