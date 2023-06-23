const Tasks = require('../model/task');

// this will add task to db
module.exports.add = function(req,res){
    let taskObj = req.body;
     Tasks.create(taskObj,function(err,newTask){
         if(err){
             console.log("Error");
         }
         return res.redirect('back');
     })
 }