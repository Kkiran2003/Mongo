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
        maxlength: 255
    },
    brand: {
        type: String
    },
    price: {
        type: Number,
        min: [ 5000 , "price not less than 5000 rs"]
    },
    discount: {
        type: Number,
        default: 5000
    },
    feature: {
        type: String,
        enum: ["fast", "Sport"]
    },
    engine: [String]

})

const Car = mongoose.model("Car", carSchema);

Car.findOneAndUpdate({ brand: "BMW" },
    { price: 600 },
    { runValidators: true },
    { new: true }
).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err.errors.price.properties.message)
})