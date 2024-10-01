const express = require("express")
const router = express.Router();
const Patient = require('../models/Patients');
const PDFDocument = require('pdfkit');

//get all patients data
router.post('/patient_data',async (req,res)=>{
    try {
        
        res.send(global.patientdata);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

// Get patient by ID
router.get('/:id', async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ msg: 'Patient not found' });
      }
      res.json(patient);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

// Generate PDF for patient details
router.get('/patients/:id/pdf', async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).send('Patient not found');
      }
  
      const doc = new PDFDocument();
      let filename = `${patient.firstName}_${patient.lastName}_details.pdf`;
      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-type', 'application/pdf');
  
      doc.text(`Patient Name: ${patient.firstName} ${patient.lastName}`, { align: 'center' });
      doc.text(`Age: ${patient.age}`);
      doc.text(`Gender: ${patient.gender}`);
      doc.text(`Diagnosis: ${patient.diagnosis}`);
      doc.text(`Contact: ${patient.contactNumber}`);
      doc.text(`Email: ${patient.email}`);
      doc.text(`Address: ${patient.address}`);
      
      doc.pipe(res);
      doc.end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  });

module.exports = router;