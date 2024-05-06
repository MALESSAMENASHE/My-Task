// //CRUD - create, read, update, delete, === post ,gst,patch, delete
// // const mongodb = require('mongodb');


// const { MongoClient,ObjectId } = require('mongodb');

// const connectionURL ='mongodb://127.0.0.1:27017';
// const databaseName ='task-manger'

// const mongoClient = new MongoClient(connectionURL);




// async function main() {
//     // Use connect method to connect to the server
//     await mongoClient.connect();
//     console.log('Connected successfully to server');
//     const db = mongoClient.db(databaseName);

//    //insert , find, update,delete,insert,count,drop,....
//     db.collection('users').findOne({
//         name: "tania",
//     }, {$set:{age:57}}).then((response)=>{ console.log(response)})
//     .catch((errror) => console.log(error+'error'))

    // db.collection('task').insertMany([
    //     {
    //         description: 'wash the car',
    //         completed: false,
    //     },
    //     {
    //         description: 'clean the room',
    //         completed: false,
    //     },
    //     {
    //         description: 'workout',
    //         completed: false,
    //     }
    // ])
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    // .finally(() => mongoClient.close())

//   }
//   main()
//   .then(
    
// )
//   .catch(console.error))
// //   .finally(() => mongoClient.close());



// generate our own id :
// {ObjectId } = require('mongodb');
// const id = new ObjectId()
// _id:id,