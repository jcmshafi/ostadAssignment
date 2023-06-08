const {readdirSync} = require('fs') 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose'); 
const helmet = require('helmet'); 
require('dotenv').config(); 
const bodyParser = require('body-parser'); 
const {PORT,DATA_BASE} = process.env; 
 
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(helmet()); 
app.use(cors()); 
app.use(morgan('dev')); 
 

 
 
readdirSync('./routers').map(r => app.use("/api/v1",require(`./routers/${r}`))); 
 
 
 
app.use("*",(req,res)=>{ 
    res.status(404).json({message:"this page is not found"}); 
}); 
 
module.exports = {PORT,DATA_BASE,app,mongoose}; 