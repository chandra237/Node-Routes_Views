const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'home.html'));
});

module.exports = router;