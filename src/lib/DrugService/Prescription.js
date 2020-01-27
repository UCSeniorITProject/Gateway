const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescription = async (prescriptionInfo) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${drugService}/api/prescription`,
      body: prescriptionInfo,
      json: true,
    };
  
    const prescriptionRequest = await request(requestOptions);
    return {...prescriptionRequest};
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPrescription = async (prescriptionId, prescriptionInfoToPatch) => {
  try {
    const requestOptions = {
      method: 'PATCH',
      uri: `${drugService}/api/prescription/${prescriptionId}`,
      body: prescriptionInfoToPatch,
      json: true,
    };

    const prescriptionRequest = await request(requestOptions);
    return {...prescriptionRequest};
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

    const prescriptionRequest = await request(requestOptions);
    return {...prescriptionRequest};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionById = async (prescriptionId) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${drugService}/api/prescription/${prescriptionId}`,
      json: true,
    };

    const prescriptionRequest = await request(requestOptions);
    return {...prescriptionRequest};
  } catch (err) {
    throw boomify(err);
  }
};