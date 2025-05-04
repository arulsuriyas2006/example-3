const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const favouriteRoute = require('./routes/favouriteRoute');
const addtocartRoute = require('./routes/addtocartRoute');
const userRoute = require('./routes/userRoute');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`Path: ${req.path}, Method: ${req.method}`);
    next();
});

// Routes
app.use('/favourite', favouriteRoute);
app.use('/addtocart', addtocartRoute);
app.use('/user', userRoute);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('DB connected successfully');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
