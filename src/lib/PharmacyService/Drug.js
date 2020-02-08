const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createDrug = async (drug) => {
	try {
		const requestOptions = {
			method: 'POST',
			uri: `${drugService}/api/drug`,
			body: {
				drug,
			},
			json: true,
		};

		const drugRequest = await request(requestOptions);
		return drugRequest.drug;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getDrugWithFilter = async (filter) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/drug`,
			qs: filter,
			json: true,
		};

		const drugs = await request(requestOptions);
		return drugs.drugs;
	} catch (err) {
		throw boomify(err);
	}
};

exports.deleteDrug = async (drugId) => {
	try {
		const requestOptions = {
			method: 'DELETE',
			uri: `${drugService}/api/drug/${drugId}`,
			json: true,
		};

		await request(requestOptions);
		return {};
	} catch (err) {
		throw boomify(err);
	}
};

exports.patchDrug = async (drugId, fieldsToUpdate) => {
	try {
		const requestOptions = {
			method: 'PATCH',
			uri: `${drugService}/api/drug/${drugId}`,
			json: true,
			body: {
				drug: fieldsToUpdate,
			},
		};

		const drug = await request(requestOptions);
		return drug.drug;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getDrugList = async () => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/drug`,
			json: true,
		};

		const drugs = await request(requestOptions);
		return drugs.drugs;
	} catch (err) {
		throw boomify(err);
	}
};
