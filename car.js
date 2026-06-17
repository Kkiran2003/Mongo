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
        required: true
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    }
})

const Car = mongoose.model("Car", carSchema);

let car1 = new Car({
    model : "BMW 4 Series",
    brand: "BMW09",
    price: "5590000"
})

car1.save().then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})