const presriptionPrescribableDrug = require('../../lib/PharmacyService/prescriptionPrescribableDrug');
const {boomify} = require('boom');


exports.createPrescriptionPrescribableDrug = async (req, reply) => {
	try {
		const presriptionPrescribableDrugToCreate = await presriptionPrescribableDrug.createPrescriptionPrescribableDrug(req.body.prescriptionPrescribableDrug, req.params.patientId);
		return {prescriptionPrescribableDrug: presriptionPrescribableDrugToCreate}
	} catch (err){
		throw boomify(err);
	}
}