const Tasks = require('../model/task');

module.exports.remove = function(req,res){

    let id = req.query.id;
    Tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error");
            return;
        }
        return res.redirect('back');
    })
}