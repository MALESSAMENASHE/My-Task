const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manger-api')




// const Task = new mongoose.model('Task',{
//     description: {
//         type: String,
//         trim: true ,
//         required: true
//     },
//     completed : {
//         type: Boolean ,
//         default: false 
//     }
// })

// const task = new Task({
//     description: 'Finis my c.v',
//     completed : false
// })

// task.save().then(()=>{
//     console.log(task)
// })
// .catch((error)=>{
//     console.log("shit ",error)
// })