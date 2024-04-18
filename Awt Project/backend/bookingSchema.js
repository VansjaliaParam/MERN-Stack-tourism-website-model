const  mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    plan: {type: String, required: true}, 
    members: {type: Number, required: true},
    nights: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    fullName : {type: String, required: true },
    number : {type: Number, required: true },
    email : {type: String, required: true },
    url: {type: String, required: true},
    date: {type: String, required: true}

});
module.exports=mongoose.model('bookings',BookingSchema);

