const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log("==========");
    console.log("URL:", req.originalUrl);
    console.log("Method:", req.method);
    console.log("Time:", new Date().toDateString());
    console.log("IP:", req.ip);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Express Assignment');
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.json(req.query);
});

app.post('/register', (req, res) => {
    res.json({
        message: "User registered successfully",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});