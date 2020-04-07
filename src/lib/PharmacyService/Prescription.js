const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescription = async (prescription) => {
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
		return prescriptionRequest.prescription;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getPrescriptionWithFilter = async (filter) => {
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

exports.deletePrescription = async (prescriptionId) => {
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

exports.getPrescriptionsAggregatedByMonthForYear = async (patientId) => {
	const requestOptions = {
		method: 'GET',
		uri: `${drugService}/api/prescription/${patientId}/month`,
		json: true,
	};

	const data = await request(requestOptions);
	return data.data;
};

exports.patchPrescription = async (prescriptionId, pharmacyFieldsToUpdate) => {
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

exports.getPrescriptionsForMonthByDoctor = async (doctorId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription/doctor/${doctorId}/month`,
			json: true,
		};

		const data = await request(requestOptions);
		return data.data;
	} catch (err) {
		throw boomify(err);
	}
};