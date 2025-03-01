const mongoose = require("mongoose")

async function connectToDatabase(){
     await mongoose.connect('mongodb+srv://shahishisir087:shisir@cluster0.zgzr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
     console.log("Database connect sucessfully")
}

module.exports = connectToDatabase

// .then(()=>{
//     console.log("connect sucessfully")
// })
// .catch(()=>{
//     console.log('failed not connected moongoose')
// })