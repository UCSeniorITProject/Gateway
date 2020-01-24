const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPharmacy = (pharmacyInfo) => {
  try {

  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePharmacy = (pharmacyId) => {
  try {

  } catch (err){
    throw boomify(err);
  }
};

exports.patchPharmacy = (pharmacyId, pharmacyInfoToPatch) => {
  try {

  } catch (err) {
    throw boomify(err);
  }
}

exports.getPharmacyList = () => {
  try {

  } catch (err) {
    throw boomify(err);
  }
}

exports.getPharmacyById = (pharmacyId) => {
  try {

  } catch (err) {
    throw boomify(err);
  }
}