const request = require('request-promise');
const {patientService} = require('../../../config').services;
const {boomify} = require('boom');
const qs = require('querystring');
 
exports.getPatientList = async (doctorId) => {
 try {
   const requestOptions = {
     method: 'GET',
     uri: `${patientService}/api/patients?doctorId=${doctorId}`,
     json: true,
   };
 
   const patientRequest = await request(requestOptions);
   return patientRequest;
 } catch (err) {
   throw boomify(err);
 }
};
 
exports.createPatient = async (patient) => {
 try {
    const requestOptions = {
     method: 'POST',
     uri: `${patientService}/api/patient`,
     body: {
       ...patient,
     },
     json: true,
    };
 
    const newPatient = await request(requestOptions);
    return {...newPatient};
 } catch (err) {
   throw boomify(err);
 }
};
 
exports.deletePatient = async (patientId) => {
 try {
   const requestOption = {
     method: 'DELETE',
     uri: `${patientService}/api/patient/${patientId}`
   };
   await request(requestOption);
 } catch (err) {
   throw boomify(err);
 }
}
 
exports.getPatientById = async(patientId) => {
 try {
   const requestOption = {
     method: 'GET',
     uri: `${patientService}/api/patient/${patientId}`,
     json: true,
   }
   const patient = await request(requestOption);
   return {...patient}
 } catch (err) {
   throw boomify(err);
 }
};
 
exports.updatePatient = async (patientId, fieldsToPatch) => {
 try {
   const requestOption = {
     method: 'PATCH',
     uri: `${patientService}/api/patient/${patientId}`,
     json: true,
     body: {
       ...fieldsToPatch,
     }
   };
 
   const patientUpdate = await request(requestOption);
   return {...patientUpdate};
 } catch (err) {
   throw boomify(err);
 }
};
 
exports.getBySSN = async (ssn) => {
 try {
   const requestOption = {
     method: 'GET',
     uri: `${patientService}/api/patient?${qs.stringify({ssn})}`,
     json: true,
   }
 
   const patients = await request(requestOption);
   return {patient: patients};
 } catch (err) {
   throw boomify(err);
 }
}

