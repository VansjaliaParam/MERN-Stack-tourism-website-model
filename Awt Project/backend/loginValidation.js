// const cors = require('cors');
// const express = require("express");
// const app = express();
//  app.use(cors());
//  app.use(express.json());
// const connectDB = require("./conncection.js");
// const signupSchema = require('./signupSchema');
// connectDB("mongodb+srv://paramvansjalia117075:param12345@cluster0.nybknk0.mongodb.net/");
// app.listen(5000, (req, res) => {
//   console.log("Server is running on port no 5000!");
// });
// app.post('/login',async (req, res) => {

//     try{
//         console.log(req.body);         
// const result = await signupSchema.findOne(req.body);

// if (result) {
//   console.log("Login Successful", result);
//   res.status(200).json({ message: "Login successful", data: result });
  
// } else {
//   console.log("Login Unsuccessful");
//   res.status(401).json({ message: "Login unsuccessful" });
// }
// } catch (error) {
// console.error("Error:", error);
// res.status(500).json({ message: "Internal server error" });
// }
// });