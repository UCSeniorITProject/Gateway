const {boomify} = require('boom');
const PatientManagementService = require('../../lib/PatientService');
const SecurityManagementService = require('../../lib/SecurityManagementService');

exports.createPatient = async (req, reply) => {
  try {
    const patient = await PatientManagementService.createPatient(req.body.patient); 
		console.log(patient)
    return {patient};
  } catch (err) {
    throw boomify(err);
  } 
}

exports.getPatientByPatientId = async (req, reply) => {
  try {
    const patient = await PatientManagementService.getPatientById(req.params.id);
    return {patient};
  } catch (err) {
    throw boomify(err);
  }
}

exports.updatePatient = async (req, reply) => {
  try {
    const updatedPatient = await PatientManagementService.updatePatient(req.params.id, req.body.patient);
    return {patient: updatedPatient};
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePatient = async (req, reply) => {
  try {
    await PatientManagementService.deletePatient(req.params.id);
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPatientWithFilter = async(req, reply) => {
  try {
    const patients = await PatientManagementService.getPatientWithFilter(req.query.doctorId);
		return {patients};
  } catch (err) {
    throw boomify(err);
  }
};

