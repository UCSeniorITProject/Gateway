const prescriptionPrescribableDrugReasonService = require('../../lib/PharmacyService/PrescriptionPrescribableDrugReason');
const {boomify} = require('boom');

exports.createPrescriptionPrescribableDrugReason = async (req, reply) => {
	try {
		const prescriptionPrescribableDrugReason = await prescriptionPrescribableDrugReasonService.createPrescriptionPrescribableDrugReason(req.body.prescriptionPrescribableDrugReason);

		return {prescriptionPrescribableDrugReason};
	} catch (err) {
		throw boomify(err);
	}
};