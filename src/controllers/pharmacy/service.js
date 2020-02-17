const pharmacyRequests = require('../../lib/PharmacyService/Pharmacy');
const {boomify} = require('boom');

exports.createPharmacy = async (req, reply) => {
  try {
    const pharmacy = await pharmacyRequests.createPharmacy(req.body.pharmacy);
    return {pharmacy};
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePharmacy = async (req, reply) => {
  try {
    await pharmacyRequests.deletePharmacy(req.params.id);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPharmacy = async (req, reply) => {
  try {
    const pharmacy = await pharmacyRequests.patchPharmacy(req.params.id, req.body.pharmacy);
    return {pharmacy};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPharmacyWithFilter = async (req, reply) => {
  try {
    const pharmacies = await pharmacyRequests.getPharmacyWithFilter(req.query);
    return {pharmacies};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPharmacyById = async (req, reply) => {
  try {
    const pharmacy = await pharmacyRequests.getPharmacyById(req.params.id);
    return {pharmacy};
  } catch (err) {
    throw boomify(err);
  }
};