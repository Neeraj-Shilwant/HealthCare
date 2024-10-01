const mongoose = require('mongoose');
const uri = "mongodb+srv://neershil67:neeraj123@cluster0.fi72w.mongodb.net/";
const mongoconnect = async () => {
    try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
    
    const db = mongoose.connection.db;
    
    const Patientcollection = db.collection("patients");
    const patient_data = await Patientcollection.find({}).toArray();
    if (!patient_data) {
        console.log("Collection Data Not Found");
      } else {
        global.patientdata = patient_data;
        
        console.log("Data successfully fetched and set to global variables");
      }
    } catch (err) {
      console.log("Error connecting to MongoDB Atlas", err);
    }
  }

  module.exports = mongoconnect;