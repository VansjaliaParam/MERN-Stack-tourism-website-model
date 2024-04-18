const  mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    pwd: {type: String}
});
module.exports=mongoose.model('userdata', signupSchema);

