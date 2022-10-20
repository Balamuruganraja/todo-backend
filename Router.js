const express = require('express');
const infoSchema = require('./infoSchema');
const router = express.Router()
const InfoRouter=require('./infoSchema')

//create 
router.post('/',async(req,res)=>{
     var data = new InfoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City: req.body.City
     })
     res.json(data)
     await data.save();
})

//Get All 
router.get("/",async(req,res)=>{
 var findData =await InfoRouter.find();
   res.send(findData);
})

//Update 
router.put('/update',async(req,res)=>{
        await InfoRouter.updateOne({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
     res.send({success:" Updated successfully"})
})
//Delete
router.delete('/del/:id',async(req,res)=>{
    await InfoRouter.findByIdAndRemove(req.params.id).then(e=>{
        res.send({message:"Deleted successfully"})
    })
})

module.exports = router;