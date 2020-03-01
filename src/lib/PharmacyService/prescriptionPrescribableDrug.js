const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescriptionPrescribableDrug = async (prescriptionPrescribableDrug) => {
	try {
		const requestOptions = {
			method: 'POST',
			uri: `${drugService}/api`
		}
	}
}