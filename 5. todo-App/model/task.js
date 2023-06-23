const mongoose = require('mongoose');

// defining schema
// each entry is called document
const taskSchema = new mongoose.Schema({
    // field 
    task : {
        // properties
        type : String,
        require: true
    },
    category: {
        type : String
    },
    due: {
        type : String
    },
    done: { 
        type:Boolean, 
        default: false 
    }
    
})
// collection(of documets) name
const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;