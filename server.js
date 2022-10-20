const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors =require('cors')


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//Router
const InfoRouter =require('./Router')
app.use( '/info',InfoRouter)

//Listen port 
app.listen(5000,()=>{
        console.log("Server started on 5000");
})

//Db connection 
mongoose.connect('mongodb://localhost:27017/student',(err)=>{
    if(!err){
        console.log("Db connected successfully");
    }
})