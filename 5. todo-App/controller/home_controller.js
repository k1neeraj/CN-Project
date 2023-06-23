// schema from model
const Tasks = require('../model/task');
// home controller which append all element in database to ejs file
module.exports.home = function(req,res){
    
    Tasks.find({},function(err,tasks){
        if(err){
            console.log("Error");
            return;
        }
       
        return res.render('to-do',{
            tasks_list : tasks
        });
    })
}




