const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'users.html'));
});

router.post('/user-name',(req,res,next)=>{
    res.redirect('/');
});

module.exports = router;