const prescribableRequest = require('../../lib/PharmacyService/Prescribable');
const {boomify} = require('boom');

exports.createPrescribable = async (req, reply) => {
  try {
    const prescribable = await prescribableRequest.createPrescribable(req.body.prescribable);

    return {prescribable};
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPrescribable = async (req, reply) => {
  try {
    const prescribable = await prescribableRequest.patchPrescribable(req.params.id, req.body.prescribable);

    return {prescribable}
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePrescribable = async (req, reply) => {
  try {
    await prescribableRequest.deletePrescribable(req.params.id);

    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescribableWithFilter = async (req, reply) => {
  try {
    const prescribables = await prescribableRequest.getPrescribableWithFilter(req.query);

    return {prescribables};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescribableByMonth = async (req, reply) => {
	try {
		const prescribableByMonth = await prescribableRequest.getPrescribablesPerMonth(req.params.patientId);
		
		return {data: prescribableByMonth};
	} catch (err) {
		throw boomify(err);
	}
};

exports.getPrescribableBreakDownByDoctor = async (req, reply) => {
	try {
		const prescribableBreakDown = await prescribableRequest.getNumberOfPrescribableByMonthForDoctor(req.params.doctorId);
		return {data: prescribableBreakDown};
	} catch (err){
		throw boomify(err);
	}
};

exports.getPrescribableBreakdownByPatientForDoctor = async (req, reply) => {
	try {
		const prescribableByPatientForMonth = await prescribableRequest.getNumberOfPrescribablesByPatientForDoctor(req.params.doctorId);
		return {data: prescribableByPatientForMonth};
	} catch (err) {
		throw boomify(err);
	}
}

exports.getNumPrescribablesPerMonthForDoctor = async (req, reply) => {
	try {
		const prescribableByPatientForMonth = await prescribableRequest.getNumPrescribablesPerMonthForDoctor(req.params.doctorId);
		return {data: prescribableByPatientForMonth};
	} catch (err) {
		throw boomify(err);
	}
};