const { text } = require("express");
const  mongoose = require("mongoose");
const BookingSchema = require('./bookingSchema.js');
const cors = require('cors');
const signupSchema = require('./signupSchema.js');
const express = require("express");
const packageSchema = require('./PackageAdd.js');
const app = express();
 app.use(cors());
 app.use(express.json());
const connectDB = require("./conncection.js");
connectDB("mongodb+srv://paramvansjalia117075:param12345@cluster0.nybknk0.mongodb.net/");
app.listen(5000, (req, res) => {
  console.log("Server is running on port no 5000!");
});
app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.post('/booknow', async (req,res)=>{
  try{
    console.log(req.body);
    const product = new BookingSchema(req.body)
    let result = await product.save();
    result = result.toObject();
    if (result){
      console.log("Updated", result);
    }
  }
  catch(e){res.send('error')}
})

app.post('/signup', async (req,res)=>{
  try{
    console.log(req.body);
    const product = new signupSchema(req.body)
    let result = await product.save();
    result = result.toObject();
    if (result){
      console.log("Updated", result);
    }
  }
  catch(e){res.send('error')}
})

app.delete('/mybookings/:id', async (req, res) => {
  try {
    const deletedBooking = await BookingSchema.findOneAndDelete({ _id: req.params.id });
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully', data: deletedBooking });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/mybookings', async (req, res) => {
  try {
    const result = await BookingSchema.findOne().sort({ _id: -1 }); // Sort by _id in descending order to get the latest entry
    res.json(result);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.post('/login',async (req, res) => {

    try{
        console.log(req.body);         
const result = await signupSchema.findOne(req.body);

if (result) {
  console.log("Login Successful", result);
  res.status(200).json({ message: "Login successful", data: result });
  
} else {
  console.log("Login Unsuccessful");
  res.status(401).json({ message: "Login unsuccessful" });
}
} catch (error) {
console.error("Error:", error);
res.status(500).json({ message: "Internal server error" });
}
});