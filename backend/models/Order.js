import mongoose from "./../database/database.js";

var orderSchema = mongoose.Schema({
    name:String,
    surname:String,
    phone:String,
    arrival:String,
    leave:String,
    notes:String,
    type:String
})

var orderData = mongoose.model("bookings",orderSchema)

export default orderData