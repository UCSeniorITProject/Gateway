const {boomify} = require('boom');
const PatientManagementService = require('../../lib/PatientService');

exports.createPatient = async (req, reply) => {
  try {
    const patient = await PatientManagementService.createPatient(req.body.patient);

    console.log(patient);
  } catch (err) {
    throw boomify(err);
  } 
}