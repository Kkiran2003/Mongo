const mongoose = require('mongoose');

main().then(res => 
    console.log("connection succesfully"))
.catch(err => 
    console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model("User",userSchema);

User.insertMany([
    {name:"tony",email:"tony@yahoo.in",age:43},
    {name:"peter",email:"peter@yahoo.in",age:33},
    {name:"Bruce",email:"Bruce@yahoo.in",age:56},
])

// const user2 = new User({
//     name:"rahul",
//     email:"rahul@gmail.com",
//     age:23
// });

// user2.save().then(res=>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })