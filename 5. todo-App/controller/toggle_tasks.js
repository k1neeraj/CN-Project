const Tasks = require('../model/task');

// it will toggle the status from incomplete to complete or vice verca
module.exports.change = function(req,res){
    // value of id will be value of input having name hidden
    let id = req.body.hidden;
    // initially doneVar is true (let assume)
    let doneVar = true;
    // find document by id in mongoDB
    Tasks.find({_id :id},function(err,tasks){
        if(err){
            console.log(err);
            return;
        }
        // if task is already complete then make it incomplete
        if(tasks[0].done){
            doneVar = false;
        }
        // find by id and update the document
        Tasks.findByIdAndUpdate(id,{ done : doneVar} , function(err,docs){
            if(err){
                console.log("Error");
                return;
            }
        });
    })
    // redirect to home page
    return res.redirect('back'); 
}
