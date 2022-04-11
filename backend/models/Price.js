import mongoose from "./../database/database.js";

var priceSchema = mongoose.Schema({
    type:String,
    price:String
})

var priceData = mongoose.model("prices",priceSchema)

export default priceData