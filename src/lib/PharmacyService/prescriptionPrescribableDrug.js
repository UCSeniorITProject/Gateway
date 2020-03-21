const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescriptionPrescribableDrug = async (prescriptionPrescribableDrug, patientId) => {
	try {
		const requestOptions = {
			method: 'POST',
			uri: `${drugService}/api/prescription-prescribable-drug/${patientId}`,
			body: {prescriptionPrescribableDrug},
			json: true,
		};

		const prescriptionPrescribableDrugToCreate = await request(requestOptions);
		return prescriptionPrescribableDrugToCreate.prescriptionPrescribableDrug;
	} catch (err) {
		throw boomify(err);
	}
}