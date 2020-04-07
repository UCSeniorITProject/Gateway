const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');


exports.createPrescriptionPrescribableDrugReason = async(prescriptionPrescribableDrugReason) => {
	try {
		const requestOptions = {
			method: 'POST',
			uri: `${drugService}/api/prescription-prescribable-drug-reason`,
			body: {
				prescriptionPrescribableDrugReason,
			},
			json: true,
		}

		const prescriptionPrescribableDrugReasonCreated = await request(requestOptions);
		return prescriptionPrescribableDrugReasonCreated.prescriptionPrescribableDrugReason;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getPrescriptionPrescribableDrugReasonBreakdown = async (doctorId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription-prescribable-drug-reason/doctor/${doctorId}/breakdown`,
			json: true,
		};

		const prescriptionPrescribableDrugReasonBreakdown = await request(requestOptions);
		return prescriptionPrescribableDrugReasonBreakdown.data;
	} catch (err) {
		throw boomify(err);
	}
};