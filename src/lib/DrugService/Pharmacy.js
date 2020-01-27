const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPharmacy = async (pharmacyInfo) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${drugService}/api/pharmacy`,
      body: pharmacyInfo,
      json: true,
    };

    const pharmacyRequest = await request(requestOptions);
    return {...pharmacyRequest};
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePharmacy = async (pharmacyId) => {
  try {
    const requestOptions = {
      method: 'DELETE',
      uri: `${drugService}/api/${pharmacyId}`,
      json: true,
    };

    await request(requestOptions);
    return {}
  } catch (err){
    throw boomify(err);
  }
};

exports.patchPharmacy = async (pharmacyId, pharmacyInfoToPatch) => {
  try {
    const requestOptions = {
      method: 'PATCH',
      uri:`${drugService}/api/${pharmacyId}`,
      body: pharmacyInfoToPatch,
      json: true,
    };

    const pharmacyRequest = await request(requestOptions);
    return {...pharmacyRequest};
  } catch (err) {
    throw boomify(err);
  }
}

exports.getPharmacyList = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${drugService}/api/pharmacy`,
      json: true,
    };

    const pharmacyRequest = await request(requestOptions);
    return {...pharmacyRequest};
  } catch (err) {
    throw boomify(err);
  }
}

exports.getPharmacyById = async (pharmacyId) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${drugService}/api/pharmacy/${pharmacyId}`,
      json: true,
    }

    const pharmacyRequest = await request(requestOptions);
    return {...pharmacyRequest};
  } catch (err) {
    throw boomify(err);
  }
}