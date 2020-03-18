const presriptionPrescribableDrug = require('../../lib/PharmacyService/Prescription');
const {boomify} = require('boom');


exports.createPrescriptionPrescribableDrug = async (req, reply) => {
	try {
		const presriptionPrescribableDrug = await presriptionPrescribableDrug.createPrescriptionPrescribableDrug(req.body.presriptionPrescribableDrug);
		return {presriptionPrescribableDrug}
	} catch (err){
		throw boomify(err);
	}
}