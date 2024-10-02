const mongoose = require('mongoose');
const uri = "mongodb+srv://neershil67:neeraj123@cluster0.fi72w.mongodb.net/";
const mongoconnect = async () => {
    try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
    
    
    } catch (err) {
      console.log("Error connecting to MongoDB Atlas", err);
    }
  }

  module.exports = mongoconnect;