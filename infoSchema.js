const mongoose =require('mongoose');

const infoSchema= mongoose.Schema({
    Name:{
        type:String,
        require:true,
        trim:true
    },
    Age:{
        type:Number,
        require:true
    },
    City:{
        type:String,
        require:true   
    },
    createTime:{
        type:Date,
        default:Date
    }
})
module.exports= mongoose.model('info',infoSchema)