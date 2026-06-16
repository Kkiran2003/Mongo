const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User = mongoose.model("User",userSchema);
console.log("start........................")

// User.find({age:{$gt:12}}).then(data => {console.log(data)})
User.findById('6a2c2db7a755a69c78899b87').then(data =>{
    console.log(data)
})

// const user1 = new User({
//     name:"kiran",
//     email:"kiran@gmail.com",
//     age:23
// })

// user1.save().then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })

// User.insertMany([
//     {name:"kiran",email:"rahul@gmail.com",age:23},
//     {name:"Simran",email:"simran@gmail.com",age:33}
// ]
// ).then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })