const request = require('request-promise');
const {drugService} = require('../../../config').services;
const qs = require('query-string');
const {boomify} = require('boom');

exports.createPrescription = (prescription) => {
	try {
		const requestOptions = {
			method: 'POST',
			uri: `${drugService}/api/prescription`,
			body: {
				prescription,
			},
			json: true,
		};

		const prescriptionRequest = await request(requestOptions);
		return {...prescriptionRequest.prescription};
	} catch (err) {
		throw boomify(err);
	}
};

exports.getPrescriptionWithFilter = (filter) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription`,
			qs: filter,
			json: true,
		};

		const prescriptions = await request(requestOptions);
		return prescriptions.prescriptions;
	} catch (err){
		throw boomify(err);
	}
};

exports.deletePrescription = (prescriptionId) => {
	try {
		const requestOptions = {
			method: 'DELETE',
			uri: `${drugService}/api/prescription/${prescriptionId}`,
			json: true,
		};

		await request(requestOptions);
	} catch (err) {
		throw boomify(err);
	}
};

exports.patchPrescription = (prescriptionId, pharmacyFieldsToUpdate) => {
	try {
		const requestOptions = {
			method: 'PATCH',
			uri: `${drugService}/api/prescription/${prescriptionId}`,
			body: {
				prescription: pharmacyFieldsToUpdate,
			},
		};

		const prescription = await request(requestOptions);
		return prescription.prescription;
	} catch (err){
		throw boomify(err);
	}
};