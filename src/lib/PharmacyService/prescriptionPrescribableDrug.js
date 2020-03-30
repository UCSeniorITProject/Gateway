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
};

exports.getPrescriptionPrescribableDrugCountForLastYear = async (patientId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription-prescribable-drug/patient/${patientId}/prescribable-count`,
			json: true,
		};

		const prescriptionsPrescribableDrugs = await request(requestOptions);
		return prescriptionsPrescribableDrugs.data;
	} catch (err){
		throw boomify(err);
	};
};

exports.getCountOfPrescribablesPerDoctor = async (patientId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription-prescribable-drug/patient/${patientId}/doctor-count`,
			json: true,
		};

		const countOfPrescribablesPerDoctor = await request(requestOptions);
		return countOfPrescribablesPerDoctor.data;
	} catch (err){
		throw boomify(err);
	}
};