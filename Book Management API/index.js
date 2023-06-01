const express= require('express');
const router= require("./routes/books.rout")

const app= new express();

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const {cache} = require("express/lib/application");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/books", router);


mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(process.env.RUNNING_PORT,function (){
            console.log("Successfully run on:" + process.env.RUNNING_PORT);
        });
    })
    .catch((error)=>{
        console.log(error);
    })
