const {boomify} = require('boom');
const PatientManagementService = require('../../lib/PatientService');
const SecurityManagementService = require('../../lib/SecurityManagementService');

exports.createPatient = async (req, reply) => {
  try {
    const patient = await PatientManagementService.createPatient(req.body.patient);
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

exports.getPatientList = async(req, reply) => {
  try {
    const patients = await PatientManagementService.getPatientList(req.query.doctorId);
    const users = await SecurityManagementService.bulkGetUserById(patients.map(x=>x.userId), req.headers.authorization);

    return {patients: users.map( x => {
      return {
        firstName: x.firstName,
        lastName: x.lastName,
        userId: x.id,
      }
    })};
  } catch (err) {
    throw boomify(err);
  }
};