const {boomify} = require('boom');
const PatientManagementService = require('../../lib/PatientService');

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
    const updatedPatient = await PatientManagementService.updatePatient(req.body.patient);
    return {updatedPatient};
  } catch (err) {
    throw boomify(err);
  }
};