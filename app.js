const express = require('express');
const path = require('path');

const app = express();

const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

app.use(express.urlencoded({extended:true}));

app.use(userRoutes);
app.use(homeRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!!</h1>');
});

app.listen(5000);