const mongoose = require('mongoose');

main().then(res =>
    console.log("connection succesfully"))
    .catch(err =>
        console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Automobile');

}

const carSchema = mongoose.Schema({
    model: {
        type: String,
        required: true,
        maxlength : 255
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type : Number,
        default : 5000
    },
    feature : {
        type : String,
        enum : ["fast" , "Sport"]
    },
    engine : [String]

})

const Car = mongoose.model("Car", carSchema);

let car1 = new Car({
    model : "Mercedes-Maybach S-Class",
    brand: "Mercedes",
    price: "34545435",
    feature : "fast",
    engine : ["40l","turbo V8"]
})

car1.save().then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})