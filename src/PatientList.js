import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/api/patient_data')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  const downloadPDF = (id) => {
    window.open(`http://localhost:5000/api/patients/${id}/pdf`);
  };

  return (
    <div>
      
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Diagnosis</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr scope="row" key={patient._id}>
              <td>{patient.firstName}&nbsp;{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.diagnosis}</td>
              <td>
                <button onClick={() => downloadPDF(patient._id)}>Download PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
