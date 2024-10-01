const express = require("express")
const router = express.Router();
const patientSch = require("../models/Patients")




router.post('/createpatient',async (req,res)=>{
    const { firstName, lastName, age, gender, diagnosis, contactNumber, email, address } = req.body;
  try {
    const newPatient = new patientSch({
      firstName,
      lastName,
      age,
      gender,
      diagnosis,
      contactNumber,
      email,
      address,
    });

    const patient = await newPatient.save();
    res.json(patient);
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})
module.exports = router;