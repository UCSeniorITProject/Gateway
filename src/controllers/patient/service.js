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
    const users = await SecurityManagementService.bulkGetUserById(patients.map(x=>x.patientUserId), req.headers.authorization);
		return {patients: patients.map( x=> {
      const user = users.filter(y=>y.id===x.patientUserId);
      return {
        ...x, firstName: user[0].firstName, lastName: user[0].lastName,
      };
    })};
  } catch (err) {
    throw boomify(err);
  }
};

